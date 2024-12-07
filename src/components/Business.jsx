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

// Card Component
function RecipeReviewCard({ title, subheader, image, description }) {
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
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" sx={{ color: "#fff" }}>
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>
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
        image={image}
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
            Details about this card:
          </Typography>
          <Typography paragraph sx={{ color: "#f8f9fa" }}>
            This section includes additional expandable content that you can customize.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

// Card Grid Component
export default function Business() {
  const cardData = [
    { id: 1, title: "Card 1", subheader: "Subheader 1", image: akshay, description: "Description for card 1." },
    { id: 2, title: "Card 2", subheader: "Subheader 2", image: akshay, description: "Description for card 2." },
    { id: 3, title: "Card 3", subheader: "Subheader 3", image: akshay, description: "Description for card 3." },
    { id: 4, title: "Card 4", subheader: "Subheader 4", image: akshay, description: "Description for card 4." },
    { id: 5, title: "Card 5", subheader: "Subheader 5", image: akshay, description: "Description for card 5." },
    { id: 6, title: "Card 6", subheader: "Subheader 6", image: akshay, description: "Description for card 6." },
    { id: 7, title: "Card 7", subheader: "Subheader 7", image: akshay, description: "Description for card 7." },
    { id: 8, title: "Card 8", subheader: "Subheader 8", image: akshay, description: "Description for card 8." },
    { id: 9, title: "Card 9", subheader: "Subheader 9", image: akshay, description: "Description for card 9." },
  ];

  return (

    <>
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Courses We Offer !!!
        {/* What People are <br className="sm:block hidden" /> saying about us */}
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

