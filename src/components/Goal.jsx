import GoalHeadline from "./home/goal/GoalHeadline";
import ImageCarousel from "./home/goal/ImageCarousel";

export default function Goal(){
    return(
        <div className="bg-[#F7F5F2] py-15">
            <GoalHeadline />
            <ImageCarousel />
        </div>
    );
}