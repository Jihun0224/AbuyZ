package com.tasteshopping.coupon.entity;

import com.tasteshopping.categories.entity.BigCategories;
import com.tasteshopping.event.entity.EventCouponLists;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Coupons {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer uid;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private int discountPrice;

    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date startDate;

    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date endDate;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "bigCategoriesUid")
    private BigCategories bigCategories;

    @OneToMany(mappedBy = "coupons", cascade = CascadeType.ALL)
    private List<CouponLists> couponLists = new ArrayList<>();

    @OneToMany(mappedBy = "coupons", cascade = CascadeType.ALL)
    private List<EventCouponLists> eventCouponLists = new ArrayList<>();
}
