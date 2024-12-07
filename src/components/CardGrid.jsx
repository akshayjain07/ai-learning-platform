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
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import akshay from "../assets/akshay.jpg"; // Replace with your image path

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

// function RecipeReviewCard({ title, subheader, image, description }) {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card
//       sx={{
//         width: "100%",
//         background: "linear-gradient(to bottom, #d3d3d3, #808080)",
//         color: "white",
//       }}
//     >
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: "darkgray" }} aria-label="recipe">
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
//         sx={{ "& .MuiTypography-root": { color: "white" } }}
//       />
//       <CardMedia component="img" height="194" image={image} alt="Card image" />
//       <CardContent>
//         <Typography variant="body2" color="white">
//           {description}
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon sx={{ color: "white" }} />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon sx={{ color: "white" }} />
//         </IconButton>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon sx={{ color: "white" }} />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph color="white">
//             Details about this card:
//           </Typography>
//           <Typography paragraph color="white">
//             This section includes additional expandable content that you can customize.
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }

// export default function CardGrid() {
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
//     <>
//       <section id="clients" className="py-12 flex flex-col items-center relative">
//         <div className="absolute w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40 z-0" />
//         <div className="w-full flex justify-between items-center flex-col sm:mb-16 mb-6 z-10">
//           <h2 className="text-4xl font-bold text-center text-gray-800">
//             What People are <br className="sm:block hidden" /> Saying About Us
//           </h2>
//         </div>
//       </section>
//       <div
//         className="grid gap-6 px-6"
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//           gap: "24px",
//         }}
//       >
//         {cardData.map((data) => (
//           <RecipeReviewCard
//             key={data.id}
//             title={data.title}
//             subheader={data.subheader}
//             image={data.image}
//             description={data.description}
//           />
//         ))}
//       </div>
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
// import akshay from "../assets/akshay.jpg"; // Replace with your image path

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
//           <Avatar sx={{ color: red[500] }} aria-label="recipe">
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
// export default function CardGrid() {
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
//     <>

//       <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
//     <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

//     <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      
//       <h2 className={styles.heading2}>
//         What People are <br className="sm:block hidden" /> saying about us
//       </h2>

//     </div>
//     </section>



//     <div
//       className="grid gap-6 p-6"
//       style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//         gap: "24px",
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
// import RecipeReviewCard from "./Card"; // Ensure you are using your updated card component
// import { cardData } from "../constants";

// export default function CardGrid() {
//   return (
//     <div className="max-w-screen-xl mx-auto grid gap-6 p-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//       {cardData.map((data) => (
//         <div key={data.id} className="flex justify-center">
//           <RecipeReviewCard
//             title={data.title}
//             subheader={data.subheader}
//             image={data.image}
//             description={data.description}
//           />
//         </div>
//       ))}
//     </div>
//   );
// }


// import React from "react";
// import RecipeReviewCard from "./Card";
// import { cardData } from "../constants";

// export default function CardGrid() {
//   return (
//     <div className="max-w-screen-xl mx-auto grid gap-6 p-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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




// import React from "react";
// import RecipeReviewCard from "./Card";
// import { cardData } from "../constants";

// export default function CardGrid() {
//   return (
//     <div className="flex flex-wrap justify-center gap-4 p-4">
//       {cardData.map((data) => (
//         <div
//           key={data.id}
//           className="w-full sm:w-[calc(50%-16px)] md:w-[calc(33.33%-16px)] lg:w-[calc(25%-16px)]"
//         >
//           <RecipeReviewCard
//             title={data.title}
//             subheader={data.subheader}
//             image={data.image}
//             description={data.description}
//           />
//         </div>
//       ))}
//     </div>
//   );
// }
