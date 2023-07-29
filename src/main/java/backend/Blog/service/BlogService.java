package backend.Blog.service;

import backend.Blog.exeption.PostNotFoundException;
import backend.Blog.model.Post;
import backend.Blog.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

@org.springframework.stereotype.Service
public class BlogService {
    private final BlogRepository blogRepository;

    @Autowired
    public BlogService(BlogRepository blogRepository){
        this.blogRepository = blogRepository;
    }

    public List<Post> getPosts() {
        return blogRepository.findAll();
    }

    public void deletePosts() {
        blogRepository.deleteAll();
    }

    public void addNewPost(Post post) {
        blogRepository.save(post);
    }

    public Post findPostById(Long postId) {
        Optional<Post> optional = blogRepository.findById(postId);
        if(optional.isPresent()){
            return optional.get();
        }else{
            throw new PostNotFoundException(postId);
        }
    }

    public void deletePostById(Long postId) {
        blogRepository.deleteById(postId);
    }
}
