import classes from './Post.module.css';

const Post = (props) => {
   return (
      <div>
         <div className={classes.item}>
            <img src="https://vkplay.ru/hotbox/content_files/Stories/2023/08/07/f6c757c785ce4bb2b8f2a26822462a1d.jpg"></img>
            {props.message}
         </div>
         <span>like {props.likeCount}</span>
      </div>
   );
};

export default Post;
