import BlogHeading from "../../components/elements/BlogHeading";
import BlogImage from "../../components/elements/BlogImage";
import BlogPage from "../../components/elements/BlogPage";
import Snippet from "../../components/elements/Snippet";

const CurrentPage = () => {
    const codeBlock = `
const GroceryItem: React.FC<GroceryItemProps> = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>Price: {item.price}</p>
      <p>Quantity: {item.quantity}</p>
    </div>
  );
}
`
    return(
        <BlogPage 
            title="Lambert in OpenCL"
            head="Lambert in OpenCL"
        >
            <BlogImage src="/images/adya.png" height="260px"
            content="What do you mean done is not a function Why didnt you let me know done might not be a function?"
            />
            <p>
            After two decades of JavaScript and decent experience with Go, this is the most significant source of frustration and friction with Rust. It’s not an insurmountable problem, but you must always be ready to deal with the async monster when it rears its head. In other languages, async is almost invisible.
            </p>
            <h2>
                This is something new
            </h2>
            <h3>What are you talking about? </h3>
            <p>
            After two decades of JavaScript and decent experience with Go, this is the most significant source of frustration and friction with Rust. It’s not an insurmountable problem, but you must always be ready to deal with the async monster when it rears its head. In other languages, async is almost invisible.
            </p>
            <Snippet codeBlock={codeBlock}/>
        </BlogPage>
    )

}

export default CurrentPage;