package com.burgerplace.bproduct.dto;

import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ReplyPageRequestDTO extends PageRequestDTO {
    
    private Long pno;

    @Builder.Default
    private int page = 1;

    @Builder.Default
    private int size = 50;

    private boolean last;
}