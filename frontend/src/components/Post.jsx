import React from "react";

/**
 * Design a post component that inherits from React Component and renders
 * a post with the following attributes:
 * > title: the title of the post
 * > content: the content of the post
 * > author: the author of the post
 * > date: the date of the post
 * > comments: an array of objects with the following attributes:
 * > likes: the number of likes for the post
 * > dislikes: the number of dislikes for the post
 * > shares: the number of shares for the post
 * 
 * The post component should have the following methods:
 * > like(): increases the number of likes by one
 * > dislike(): increases the number of dislikes by one
 * > share(): increases the number of shares by one
 * > render(): renders the post
 * > componentDidMount(): increases the number of likes by one
 * > componentDidUpdate(): increases the number of dislikes by one
 * > componentWillUnmount(): increases the number of shares by one
 * > addComment(comment): adds a comment to the post
 * > removeComment(comment): removes a comment from the post
 * > editContent(content): edits the content of the post
 * > editTitle(title): edits the title of the post
 */

export class Post extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title: this.props.title,
            content: this.props.content,
            author: this.props.author,
            date: this.props.date,
            comments: this.props.comments,
            likes: this.props.likes,
            dislikes: this.props.dislikes,
            shares: this.props.shares
        }
        
        // bind the custom function in here
        this.function=this.function(this)
        this.function=this.function.bind(this)
    }
    render(){
        return(
            <div>
                <h1>Title</h1>
                <p>Text</p>
                <img></img>
            </div>
        )
    }
    //FIXME:
    like(){
        
    }
    
    dislike(){
        
    }

    share(){
        
    }

    render(){
        
    }

    componentDidMount(){
        
    }

    componentDidUpdate(){
        
    }

    componentWillUnmount(){
        
    }

    editTitle(){
        
    }

    addComment(){
        
    }

    removeComment(){
        
    }

    editContent(){
        
    }
}