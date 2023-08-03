package com.burgerplace.bproduct.service;

import org.springframework.transaction.annotation.Transactional;

import com.burgerplace.bproduct.dto.PageResponseDTO;
import com.burgerplace.bproduct.dto.ReplyDTO;
import com.burgerplace.bproduct.dto.ReplyPageRequestDTO;


@Transactional
public interface ReplyService {
    
    PageResponseDTO<ReplyDTO> list(ReplyPageRequestDTO requestDTO);

    // reply insert
    Long register(ReplyDTO replyDTO);

    // reply read
    ReplyDTO read(Long pRno);

    // reply delete
    void remove(Long pRno);

    // reply modify
    void modify(ReplyDTO replyDTO);
    
}