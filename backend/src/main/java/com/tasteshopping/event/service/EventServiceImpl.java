package com.tasteshopping.event.service;

import com.tasteshopping.common.service.ImageUploadService;
import com.tasteshopping.event.dto.EventDto;
import com.tasteshopping.event.repository.EventRepository;
import com.tasteshopping.user.dto.ResponseDto;
import com.tasteshopping.user.dto.ResultDto;
import com.tasteshopping.user.dto.Role;
import com.tasteshopping.user.entity.Users;
import com.tasteshopping.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class EventServiceImpl implements EventService{

    private final EventRepository eventRepository;
    private final UserRepository userRepository;
    private final ImageUploadService imageUploadService;
    @Override
    @Transactional
    public ResponseDto create(String email, MultipartFile thumbnail,
                              MultipartFile content_img,EventDto eventDto) {
        ResponseDto responseDto = new ResponseDto();
        if(!check(email)){
            responseDto.setMessage("추가 실패 : 궏한없음");
            responseDto.setData(new ResultDto(false));
            return responseDto;
        }
        try {
            if(thumbnail!=null){
                String thumbnail_url = imageUploadService.uploadImg(thumbnail);
                eventDto.setThumbnail(thumbnail_url);
            }
            if(content_img!=null){
                String content_img_url = imageUploadService.uploadImg(content_img);
                eventDto.setContentImg(content_img_url);
            }
            SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
            Date start_date = formatter.parse(eventDto.getStart_date());
            Date end_date = formatter.parse(eventDto.getEnd_date());
            String now = LocalDateTime.now().toString();
            Date now_date = formatter.parse(now);
            if(start_date.after(now_date)){
                eventDto.setStatus(0);
            }
            else if(now_date.after(start_date) && now_date.before(end_date)){
                eventDto.setStatus(1);
            }
            else {
                eventDto.setStatus(2);
            }
            eventRepository.save(eventDto.toEntity());
        }
        catch (Exception e){
            e.printStackTrace();
            responseDto.setMessage("이미지 업로드 실패");
            responseDto.setData(new ResultDto(false));
            return responseDto;
        }
        responseDto.setMessage("추가 성공");
        responseDto.setData(new ResultDto(true));
        return responseDto;
    }

    @Override
    public ResponseDto getEventList(String email) {

        return null;
    }

    @Override
    @Transactional
    public ResponseDto deleteEvent(String email) {

        return null;
    }

    public boolean check(String email){
        Optional<Users> users = userRepository.findByEmail(email);
        if(!(users.isPresent() && users.get().getUserRoles() == Role.ADMIN)){
            return false;
        }
        return true;
    }
}
