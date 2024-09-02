import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { CSSProperties } from "react";
import theme from "../../theme";
import { convertSlug } from "@/api/api.path.enum";

const ProductBox = ({ data }: { data: any }) => {
  const styleProductTitle: CSSProperties = {
    fontFamily: "Inika",
    fontSize: "20px",
    fontWeight: "bold",
  };

  const router = useRouter();

  return (
    <Card
      key={data.name}
      variant="outlined"
      sx={{
        "&:hover": {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          cursor: "pointer"
        },
        "&:hover img": {
          transition: "transform 0.5s ease-in-out",
          transform: "scale(1.1)",
        },
      }}
      onClick={() => router.push(`/products/${convertSlug(data.name)}-${data._id}.html`)}
    >
      <CardContent>
        <Box sx={{ overflow: "hidden" }} height="300px">
          <CardMedia
            component="img"
            image={data.images[0].url}
            alt={data.alt}
            height={"100%"}
            width={1}
          />
        </Box>
        <Stack direction={"row"} justifyContent={"center"} mt={2}>
          <Typography sx={styleProductTitle}>{data.name}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProductBox;
