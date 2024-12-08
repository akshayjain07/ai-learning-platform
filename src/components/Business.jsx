import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import akshay from "../assets/akshay.png"; // Replace with your image path
import styles from "../style";
import { ai_course, cv_course, dl_course, gai_course, py_course } from "../assets";

// ExpandMore button styling
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: "auto",
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

// RecipeReviewCard Component
function RecipeReviewCard({ title, subheader, image, description, points, icon_image }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        width: "100%",
        background: "linear-gradient(to bottom, #343a40, #212529)", // Dark grey gradient
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", // Dark shadow
        borderRadius: "12px",
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            src={image} // Image from props
            alt="Avatar Image"
            sx={{ bgcolor: red[500], width: 56, height: 56 }} // Customize size if needed
          />
        }
        action={
          <IconButton aria-label="settings" sx={{ color: "#fff" }}>
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <Typography variant="body1" sx={{ fontWeight: "bold", color: "#fff" }}>
            {title}
          </Typography>
        }
        subheader={
          <Typography variant="body2" sx={{ color: "#f8f9fa" }}>
            {subheader}
          </Typography>
        }
      />

      <CardMedia
        component="img"
        height="194"
        image={image} // Image passed from props
        alt="Card image"
        sx={{ objectFit: "cover", borderRadius: "0 0 12px 12px" }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{ color: "#f8f9fa" }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" sx={{ color: "#fff" }}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" sx={{ color: "#fff" }}>
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon sx={{ color: "#fff" }} />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph sx={{ color: "#fff" }}>
            Course Content:
          </Typography>
          {points.map((point, index) => (
            <Typography key={index} paragraph sx={{ color: "#f8f9fa" }}>
              {point}
            </Typography>
          ))}
        </CardContent>
      </Collapse>
    </Card>
  );
}

// Business Component to display the grid of courses
export default function Business() {
  const cardData = [
    {
      id: 1,
      title: "Introduction to Python for ML",
      subheader: "Your first step into Python & ML",
      image: py_course,
      icon_image: py_course,
      description: "Learn Python programming tailored for machine learning enthusiasts.",
      points: [
        "Basics of Python programming.",
        "Introduction to data manipulation with Pandas.",
        "Visualization with Matplotlib and Seaborn.",
        "Simple machine learning models using Scikit-learn.",
        "Hands-on projects for beginners.",
      ],
    },
    {
      id: 2,
      title: "Introduction to Deep Learning",
      subheader: "Building your neural network foundation",
      image: dl_course,
      icon_image: py_course,
      description: "A deep dive into neural networks and building robust models.",
      points: [
        "Introduction to neural networks.",
        "Understanding forward and backward propagation.",
        "Building deep networks with TensorFlow and Keras.",
        "Image classification using CNNs.",
        "Practical projects with real-world datasets.",
      ],
    },
    {
      id: 3,
      title: "Computer Vision",
      subheader: "Teach machines to see and understand",
      image: cv_course,
      icon_image: py_course,
      description: "Learn to process and analyze visual data for practical applications.",
      points: [
        "Basics of image processing.",
        "Implementing Convolutional Neural Networks (CNNs).",
        "Object detection and segmentation.",
        "Image generation with GANs.",
        "Applications in healthcare, security, and self-driving cars.",
      ],
    },
    {
      id: 4,
      title: "Building AI Projects and Portfolio",
      subheader: "Step into AI with confidence",
      image: ai_course,
      icon_image: py_course,
      description: "A guide to building AI projects and showcasing your skills.",
      points: [
        "Ideating and planning AI projects.",
        "Using Kaggle for competitions and notebooks.",
        "Building a strong GitHub repository.",
        "Optimizing LinkedIn and X profiles for AI roles.",
        "Networking in the AI community.",
      ],
    },
    {
      id: 5,
      title: "Generative AI for Beginners",
      subheader: "Enter the world of GenAI",
      image: akshay,
      icon_image: py_course,
      description: "Learn the basics of generative AI and create with machine learning.",
      points: [
        "Basics of generative AI.",
        "Text generation with GPT models.",
        "AI art generation with stable diffusion.",
        "Training your generative models.",
        "Applications in art, writing, and innovation.",
      ],
    },
    {
      id: 6,
      title: "Generative AI for Non-Tech Founders",
      subheader: "AI for strategic innovation",
      image: gai_course,
      icon_image: py_course,
      description: "Learn how non-technical founders can use AI for business.",
      points: [
        "Overview of generative AI technologies.",
        "Key use cases for non-technical applications.",
        "Building strategies around AI tools.",
        "Leveraging AI for product development.",
        "Cost and implementation planning.",
      ],
    },
  ];

  return (
    <>
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          Courses We Offer !!!
        </h2>
      </div>

      <div
        className="grid gap-6 p-6"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "50px",
          justifyContent: "center",
        }}
      >
        {cardData.map((data) => (
          <RecipeReviewCard
            key={data.id}
            title={data.title}
            subheader={data.subheader}
            image={data.image}
            description={data.description}
            points={data.points}
          />
        ))}
      </div>
    </>
  );
}



// import React from "react";
// import { styled } from "@mui/material/styles";
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import Collapse from "@mui/material/Collapse";
// import Avatar from "@mui/material/Avatar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import { red } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import akshay from "../assets/akshay.png"; // Replace with your image path
// import styles from "../style";
// // import cardData from "../constants";

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   marginLeft: "auto",
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// function RecipeReviewCard({ title, subheader, image, description, points }) {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card
//       sx={{
//         width: "100%",
//         background: "linear-gradient(to bottom, #343a40, #212529)", // Dark grey gradient
//         boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", // Dark shadow
//         borderRadius: "12px",
//       }}
//     >

//       <CardHeader
//         avatar={
//           <Avatar
//             src={akshay} // Replace 'image' with your variable containing the image URL
//             alt="Avatar Image"
//             sx={{ bgcolor: red[500], width: 56, height: 56 }} // Customize size if needed
//           />
//         }
//         action={
//           <IconButton aria-label="settings" sx={{ color: "#fff" }}>
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title={
//           <Typography variant="body1" sx={{ fontWeight: "bold", color: "#fff" }}>
//             {title}
//           </Typography>
//         }
//         subheader={
//           <Typography variant="body2" sx={{ color: "#f8f9fa" }}>
//             {subheader}
//           </Typography>
//         }
//       />


//       <CardMedia
//         component="img"
//         height="194"
//         image={courseIcon}
//         alt="Card image"
//         sx={{ objectFit: "cover", borderRadius: "0 0 12px 12px" }}
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary" sx={{ color: "#f8f9fa" }}>
//           {description}
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites" sx={{ color: "#fff" }}>
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share" sx={{ color: "#fff" }}>
//           <ShareIcon />
//         </IconButton>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon sx={{ color: "#fff" }} />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph sx={{ color: "#fff" }}>
//             Course Content:
//           </Typography>
//           <Typography paragraph sx={{ color: "#f8f9fa" }}>
//             hii
//             {/* {point1} */}
//           </Typography>
//           <Typography paragraph sx={{ color: "#f8f9fa" }}>
//             hii
//             {/* {point2} */}
//           </Typography>
//           <Typography paragraph sx={{ color: "#f8f9fa" }}>
//             hii
//             {/* {point3} */}
//           </Typography>
//           <Typography paragraph sx={{ color: "#f8f9fa" }}>
//             hii
//             {/* {point4} */}
//           </Typography>
//           <Typography paragraph sx={{ color: "#f8f9fa" }}>
//             hii
//             {/* {point5} */}
//           </Typography>
          
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }

// // Card Grid Component
// export default function Business() {
//   const cardData = [
//   {
//     id: 1,
//     title: "Introduction to Python for ML",
//     subheader: "Your first step into Python & ML",
//     image: akshay,
//     point1: "Basics of Python programming.",
//     point2: "Introduction to data manipulation with Pandas.",
//     point3: "Visualization with Matplotlib and Seaborn.",
//     point4: "Simple machine learning models using Scikit-learn.",
//     point5: "Hands-on projects for beginners.",
//   },
//   {
//     id: 2,
//     title: "Introduction to Deep Learning",
//     subheader: "Building your neural network foundation",
//     image: akshay,
//     point1: "Introduction to neural networks.",
//     point2: "Understanding forward and backward propagation.",
//     point3: "Building deep networks with TensorFlow and Keras.",
//     point4: "Image classification using CNNs.",
//     point5: "Practical projects with real-world datasets.",
//   },
//   {
//     id: 3,
//     title: "Computer Vision",
//     subheader: "Teach machines to see and understand",
//     image: akshay,
//     point1: "Basics of image processing.",
//     point2: "Implementing Convolutional Neural Networks (CNNs).",
//     point3: "Object detection and segmentation.",
//     point4: "Image generation with GANs.",
//     point5: "Applications in healthcare, security, and self-driving cars.",
//   },
//   {
//     id: 4,
//     title: "Building AI Projects and Portfolio",
//     subheader: "Step into AI with confidence",
//     image: akshay,
//     point1: "Ideating and planning AI projects.",
//     point2: "Using Kaggle for competitions and notebooks.",
//     point3: "Building a strong GitHub repository.",
//     point4: "Optimizing LinkedIn and X profiles for AI roles.",
//     point5: "Networking in the AI community.",
//   },
//   {
//     id: 5,
//     title: "Generative AI for Beginners",
//     subheader: "Enter the world of GenAI",
//     image: akshay,
//     point1: "Basics of generative AI.",
//     point2: "Text generation with GPT models.",
//     point3: "AI art generation with stable diffusion.",
//     point4: "Training your generative models.",
//     point5: "Applications in art, writing, and innovation.",
//   },
//   {
//     id: 6,
//     title: "Generative AI for Non-Tech Founders",
//     subheader: "AI for strategic innovation",
//     image: akshay,
//     point1: "Overview of generative AI technologies.",
//     point2: "Key use cases for non-technical applications.",
//     point3: "Building strategies around AI tools.",
//     point4: "Leveraging AI for product development.",
//     point5: "Cost and implementation planning.",
//   },
// ];


//   return (

//     <>
//     <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
//       <h2 className={styles.heading2}>
//         Courses We Offer !!!
//         {/* What People are <br className="sm:block hidden" /> saying about us */}
//       </h2>
//       </div>

//     <div
//       className="grid gap-6 p-6"
//       style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//         gap: "50px",
//         justifyContent: "center",
//       }}
//     >
//       {cardData.map((data) => (
//         <RecipeReviewCard
//           key={data.id}
//           title={data.title}
//           subheader={data.subheader}
//           image={data.image}
//           description={data.description}
//         />
//       ))}
//     </div>
//     </>
//   );
// }



// import React from "react";
// import { styled } from "@mui/material/styles";
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import Collapse from "@mui/material/Collapse";
// import Avatar from "@mui/material/Avatar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import { red } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import akshay from "../assets/akshay.png"; // Replace with your image path

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   marginLeft: "auto",
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// // Card Component
// function RecipeReviewCard({ title, subheader, image, description }) {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card
//       sx={{
//         width: "100%",
//         background: "linear-gradient(to bottom, #343a40, #212529)", // Dark grey gradient
//         boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", // Dark shadow
//         borderRadius: "12px",
//       }}
//     >
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings" sx={{ color: "#fff" }}>
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title={
//           <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>
//             {title}
//           </Typography>
//         }
//         subheader={
//           <Typography variant="body2" sx={{ color: "#f8f9fa" }}>
//             {subheader}
//           </Typography>
//         }
//       />
//       <CardMedia
//         component="img"
//         height="194"
//         image={image}
//         alt="Card image"
//         sx={{ objectFit: "cover", borderRadius: "0 0 12px 12px" }}
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary" sx={{ color: "#f8f9fa" }}>
//           {description}
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites" sx={{ color: "#fff" }}>
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share" sx={{ color: "#fff" }}>
//           <ShareIcon />
//         </IconButton>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon sx={{ color: "#fff" }} />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph sx={{ color: "#fff" }}>
//             Details about this card:
//           </Typography>
//           <Typography paragraph sx={{ color: "#f8f9fa" }}>
//             This section includes additional expandable content that you can customize.
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }

// // Card Grid Component
// export default function Business() {
//   const cardData = [
//     { id: 1, title: "Card 1", subheader: "Subheader 1", image: akshay, description: "Description for card 1." },
//     { id: 2, title: "Card 2", subheader: "Subheader 2", image: akshay, description: "Description for card 2." },
//     { id: 3, title: "Card 3", subheader: "Subheader 3", image: akshay, description: "Description for card 3." },
//     { id: 4, title: "Card 4", subheader: "Subheader 4", image: akshay, description: "Description for card 4." },
//     { id: 5, title: "Card 5", subheader: "Subheader 5", image: akshay, description: "Description for card 5." },
//     { id: 6, title: "Card 6", subheader: "Subheader 6", image: akshay, description: "Description for card 6." },
//     { id: 7, title: "Card 7", subheader: "Subheader 7", image: akshay, description: "Description for card 7." },
//     { id: 8, title: "Card 8", subheader: "Subheader 8", image: akshay, description: "Description for card 8." },
//     { id: 9, title: "Card 9", subheader: "Subheader 9", image: akshay, description: "Description for card 9." },
//   ];

//   return (
//     <div
//       className="grid gap-6 p-6"
//       style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//         gap: "50px",
//         justifyContent: "center",
//       }}
//     >
//       {cardData.map((data) => (
//         <RecipeReviewCard
//           key={data.id}
//           title={data.title}
//           subheader={data.subheader}
//           image={data.image}
//           description={data.description}
//         />
//       ))}
//     </div>
//   );
// }




// import { features } from "../constants";
// import styles, { layout } from "../style";
// import Button from "./Button";

// const FeatureCard = ({ icon, title, content, index }) => (
//   <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
//     <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
//       <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
//     </div>
//     <div className="flex-1 flex flex-col ml-3">
//       <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
//         {title}
//       </h4>
//       <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
//         {content}
//       </p>
//     </div>
//   </div>
// );

// const Business = () =>  (
//   <section id="features" className={layout.section}>
//     <div className={layout.sectionInfo}>
//       <h2 className={styles.heading2}>
//         You do the business, <br className="sm:block hidden" /> we’ll handle
//         the money.
//       </h2>
//       <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
//         With the right credit card, you can improve your financial life by
//         building credit, earning rewards and saving money. But with hundreds
//         of credit cards on the market.
//       </p>

//       <Button styles={`mt-10`} />
//     </div>

//     <div className={`${layout.sectionImg} flex-col`}>
//       {features.map((feature, index) => (
//         <FeatureCard key={feature.id} {...feature} index={index} />
//       ))}
//     </div>
//   </section>
// );

// export default Business;

















// import React from "react";
// import { styled } from "@mui/material/styles";
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import Collapse from "@mui/material/Collapse";
// import Avatar from "@mui/material/Avatar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import { red } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import akshay from "../assets/akshay.png"; // Replace with your image path

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   marginLeft: "auto",
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// // Card Component
// function RecipeReviewCard({ title, subheader, image, description }) {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card sx={{ width: "100%" }}> {/* Ensures the card fits the grid column */}
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title={title}
//         subheader={subheader}
//       />
//       <CardMedia component="img" height="194" image={image} alt="Card image" />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//           {description}
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Details about this card:</Typography>
//           <Typography paragraph>
//             This section includes additional expandable content that you can customize.
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }

// // Card Grid Component
// export default function Business() {
// // export default function CardGrid() {
//   const cardData = [
//     { id: 1, title: "Card 1", subheader: "Subheader 1", image: akshay, description: "Description for card 1." },
//     { id: 2, title: "Card 2", subheader: "Subheader 2", image: akshay, description: "Description for card 2." },
//     { id: 3, title: "Card 3", subheader: "Subheader 3", image: akshay, description: "Description for card 3." },
//     { id: 4, title: "Card 4", subheader: "Subheader 4", image: akshay, description: "Description for card 4." },
//     { id: 5, title: "Card 5", subheader: "Subheader 5", image: akshay, description: "Description for card 5." },
//     { id: 6, title: "Card 6", subheader: "Subheader 6", image: akshay, description: "Description for card 6." },
//     { id: 7, title: "Card 7", subheader: "Subheader 7", image: akshay, description: "Description for card 7." },
//     { id: 8, title: "Card 8", subheader: "Subheader 8", image: akshay, description: "Description for card 8." },
//     { id: 9, title: "Card 9", subheader: "Subheader 9", image: akshay, description: "Description for card 9." },
//   ];

//   return (
//     <div
//       className="grid gap-6 p-6"
//       style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//         gap: "50px",
//         // gap: "24px",
//       }}
//     >
//       {cardData.map((data) => (
//         <RecipeReviewCard
//           key={data.id}
//           title={data.title}
//           subheader={data.subheader}
//           image={data.image}
//           description={data.description}
//         />
//       ))}
//     </div>
//   );
// }

