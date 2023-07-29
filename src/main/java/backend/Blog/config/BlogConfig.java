package backend.Blog.config;

import backend.Blog.model.Post;
import backend.Blog.repository.BlogRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class BlogConfig {

    /*@Bean
    CommandLineRunner commandLineRunner(BlogRepository blogRepository){
        return args -> {
            Post p1 = new Post("Hey1", "Content of hey1");
            Post p2 = new Post("Hey2", "Content of hey2");
            blogRepository.saveAll(List.of(p1, p2));
        };
    }*/
}
