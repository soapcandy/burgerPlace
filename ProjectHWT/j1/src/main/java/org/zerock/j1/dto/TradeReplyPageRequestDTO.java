package org.zerock.j1.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class TradeReplyPageRequestDTO extends PageRequestDTO {

    private Long tBno;

    @Builder.Default
    private int page=1;

    @Builder.Default
    private int size=20;

    private boolean last;
    
}
