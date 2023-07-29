package backend.Blog.model;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "post")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long postId;
    @Column(nullable = false)
    private String postTitle;
    @Column(nullable = false)
    private String postContent;

    public Post(){

    }

    public Post(String postTitle, String postContent) {
        this.postTitle = postTitle;
        this.postContent = postContent;
    }

    public Post(Long postId, String postTitle, String postContent) {
        this.postId = postId;
        this.postTitle = postTitle;
        this.postContent = postContent;
    }

    public Long getPostId() {
        return postId;
    }

    public void setPostId(Long postId) {
        this.postId = postId;
    }

    public String getPostTitle() {
        return postTitle;
    }

    public void setPostTitle(String postTitle) {
        this.postTitle = postTitle;
    }

    public String getPostContent() {
        return postContent;
    }

    public void setPostContent(String postContent) {
        this.postContent = postContent;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Post post = (Post) o;
        return Objects.equals(postId, post.postId) && Objects.equals(postTitle, post.postTitle) && Objects.equals(postContent, post.postContent);
    }

    @Override
    public int hashCode() {
        return Objects.hash(postId, postTitle, postContent);
    }

    @Override
    public String toString() {
        return "Post{" +
                "postId=" + postId +
                ", postTitle='" + postTitle + '\'' +
                ", postContent='" + postContent + '\'' +
                '}';
    }
}
