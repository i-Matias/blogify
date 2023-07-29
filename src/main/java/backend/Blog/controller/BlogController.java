package backend.Blog.controller;

import backend.Blog.model.Post;
import backend.Blog.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/blog")
public class BlogController {

    private final BlogService blogService;

    @Autowired
    public BlogController(BlogService blogService){
        this.blogService = blogService;
    }

    @GetMapping
    public List<Post> getPosts() {
        return blogService.getPosts();
    }

    @GetMapping("post/read-more/{postId}")
    public Post findPostById(@PathVariable Long postId) {
        return blogService.findPostById(postId);
    }

    @PostMapping("post")
    public void createPost(@RequestBody Post post){
        blogService.addNewPost(post);
    }

    @DeleteMapping("delete/{postId}")
    public void deletePostById(@PathVariable Long postId){
        blogService.deletePostById(postId);
    }

    @DeleteMapping("delete")
    public void deletePosts(){
        blogService.deletePosts();
    }


}
