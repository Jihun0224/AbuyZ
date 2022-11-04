package com.tasteshopping.order.service;

import com.tasteshopping.cart.exception.OutOfStockException;
import com.tasteshopping.cart.dto.CartDto;
import com.tasteshopping.cart.entity.Carts;
import com.tasteshopping.cart.repository.CartRepository;
import com.tasteshopping.cart.service.CartService;
import com.tasteshopping.common.dto.BaseRes;
import com.tasteshopping.order.dto.OrderStatus;
import com.tasteshopping.order.entity.OrderLists;
import com.tasteshopping.order.entity.Orders;
import com.tasteshopping.order.dto.Status;
import com.tasteshopping.order.repository.OrderListRepository;
import com.tasteshopping.order.repository.OrderRepository;
import com.tasteshopping.inventory.entity.Inventories;
import com.tasteshopping.user.entity.Users;
import com.tasteshopping.user.repository.UserRepository;
import com.tasteshopping.common.service.UtilService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;

    private final UserRepository userRepository;

    private final CartRepository cartRepository;

    private final OrderListRepository orderListRepository;

    private final CartService cartService;

    @Override
    @Transactional
    public void cartPay(String email) {
        Users user = userRepository.findByEmail(email).get();
        List<Carts> cartList = cartRepository.findByUser(user);
        OrderLists orderLists = createOrderLists(user);
        orderLists.setStatus(Status.PROCESS.toString());
        for (int i = 0; i < cartList.size(); ++i) {
            orderLists = pay(cartList.get(i),orderLists,user,orderLists.getTotalPrice());
        }
        orderListRepository.save(orderLists);
    }

    public OrderLists createOrderLists(Users user){
        OrderLists orderLists = new OrderLists();
        orderLists.setUser(user);
        orderLists.setTotalPrice(0);
        orderLists.setDay(LocalDateTime.now().getDayOfWeek().toString());
        Date date = UtilService.getDate();
        orderLists.setDate(date);
        return orderListRepository.save(orderLists);
    }
    public OrderLists pay(Carts cart, OrderLists orderLists, Users user,int totalPrice){
        Orders orders = new Orders();
        orders.setOrderList(orderLists);
        orders.setCount(cart.getProductCount());
        orders.setStatus(Status.PROCESS.toString());
        Inventories inventory = cart.getInventory();
        // 상품 할인율 적용
        Integer price =(100 - inventory.getProduct().getDiscountRate()) * inventory.getProduct().getPrice()/100 + inventory.getPrice();
        if (orders.getCoupon() != null) {
            price = price - orders.getCoupon().getDiscountPrice();
        }
        orders.setPrice(price);
        orders.setInventory(inventory);
        int remainingStoke = inventory.getCount() - cart.getProductCount();
        if (remainingStoke >= 0) {
            inventory.setCount(remainingStoke);
        } else {
            throw new OutOfStockException();
        }
        totalPrice += price * orders.getCount();
        orderRepository.save(orders);
        cartRepository.delete(cart);
        orderLists.setTotalPrice(totalPrice);
        return orderLists;
    }

    @Override
    @Transactional
    public void basicPay(String email,
                         CartDto cartDto) {
        // 일반 결제하기 -> 카트에 넣고 카트 마지막꺼만 결제하는 방식
        cartService.putCart(email, cartDto);
        Users user = userRepository.findByEmail(email).get();
        // 장바구니 가져와서 orderList 만들기
        OrderLists orderLists = createOrderLists(user);
        orderLists.setStatus(Status.PROCESS.toString());
        Carts cart = cartRepository.findByUserAndUid(user);
        orderLists = pay(cart,orderLists,user,0);
        orderListRepository.save(orderLists);
    }

    @Override
    @Transactional
    public BaseRes orderCancel(Integer orderUid) {
        // 고객이 취소 요청한 것을 응함
        Orders order = orderRepository.findById(orderUid).get();
        OrderLists orderLists = orderListRepository.findById(order.getOrderList().getUid()).get();
        if (order.getStatus().equals(OrderStatus.CANCEL_REQUEST.toString())) {
            order.setStatus(OrderStatus.CANCEL.toString());
            order.getInventory().setCount(order.getInventory().getCount() + order.getCount());
            orderLists.setTotalPrice(orderLists.getTotalPrice() - (order.getPrice() * order.getCount()));
            // 재고 다시 돌려 놓음
            orderListRepository.save(orderLists);
            orderRepository.save(order);
            return new BaseRes(200, "취소 성공", null);
        } else {
            return new BaseRes(202, "취소할 수 없는 상품입니다.", null);
        }
    }

    @Override
    @Transactional
    public BaseRes orderRegisterCancel(List<Integer> orderUids) {
        // 고객이 취소요청을 하는 로직
        for (int i = 0; i < orderUids.size(); ++i) {

            Orders order = orderRepository.findById(orderUids.get(i)).get();
            if (order.getStatus().equals(OrderStatus.PROCESS.toString())) {
                order.setStatus(OrderStatus.CANCEL_REQUEST.toString());
            }
            orderRepository.save(order);
        }
        return new BaseRes(200, "client 취소 요청 성공", null);
    }

    @Override
    public BaseRes changeStatus(Integer orderUid, String status) {
        Orders order = orderRepository.findById(orderUid).get();
        order.setStatus(status);
        orderRepository.save(order);
        return new BaseRes(200, "주문 상태 변경 성공", null);
    }
}