package com.tasteshopping.inventory.entity;

import com.tasteshopping.cart.entity.Carts;
import com.tasteshopping.order.entity.Orders;
import com.tasteshopping.inventory.dto.InventoryDto;
import com.tasteshopping.product.entity.Products;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Builder
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Inventories {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer uid;

    Integer price;
    Integer count;

    @Column(name = "product_option_list")
    String productOptionList;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "products_uid")
    Products product;

    // 양방향 설정해주기
    @OneToMany(mappedBy = "inventory")
    List<Carts> cartsList;

    @OneToMany(mappedBy = "inventory",fetch = FetchType.LAZY)
    List<Orders> ordersList;

    public InventoryDto toDto(){
        InventoryDto inventoryDto = new InventoryDto();
        inventoryDto.setUid(uid);
        inventoryDto.setCount(count);
        inventoryDto.setPrice(price);
        inventoryDto.setProductOptionUidString(productOptionList);

        return inventoryDto;
    }

    public InventoryDto toResDto(){
        InventoryDto inventoryDto = new InventoryDto();
        inventoryDto.setUid(uid);
        inventoryDto.setCount(count);
        inventoryDto.setPrice(price);
        inventoryDto.setProductOptionUidString(productOptionList);


        return inventoryDto;
    }
}
