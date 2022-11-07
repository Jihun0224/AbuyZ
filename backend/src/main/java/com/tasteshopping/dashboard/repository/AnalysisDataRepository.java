package com.tasteshopping.dashboard.repository;

import com.tasteshopping.dashboard.entity.AnalysisData;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface AnalysisDataRepository extends JpaRepository<AnalysisData,Integer> {
    List<AnalysisData> findByPageName(String pageName);
    List<AnalysisData> findByDateAndPageName(Date date, String pageName);
}
