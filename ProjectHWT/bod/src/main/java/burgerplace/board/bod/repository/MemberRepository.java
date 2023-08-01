package burgerplace.board.bod.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import burgerplace.board.bod.entity.Member;

public interface MemberRepository extends JpaRepository<Member, String> {
    
}