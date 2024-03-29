package com.burgerplace.bproduct.repository;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.burgerplace.bproduct.entity.Member;
import com.burgerplace.bproduct.repositroy.MemberRepository;

@SpringBootTest
public class MemberTests {

    @Autowired
    MemberRepository memberRepository;

    @Test
    public  void testInsert(){

        Member member = Member.builder()
                .email("user01@gmail.com")
                .pw("1111")
                .nickname("USER00")
                .admin(true)
                .build();

        memberRepository.save(member);
    }
    @Test
    public  void testRead(){
        String email = "user01@gmail.com";

        Optional<Member> result = memberRepository.findById(email);

        Member member = result.orElseThrow();

        System.out.println(member);
    }
}
