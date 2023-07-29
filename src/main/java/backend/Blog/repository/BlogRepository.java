package backend.Blog.repository;

import backend.Blog.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

@org.springframework.stereotype.Repository
public interface BlogRepository extends JpaRepository<Post, Long> {

}
