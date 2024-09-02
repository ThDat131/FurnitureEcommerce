import { ApiPathEnum } from "@/api/api.path.enum";
import axios from "@/api/axios.instance";
import { IProduct } from "@/types/products/products.interface";
import { ApiResponse } from "@/types/utils/api-response.interface";
import type { Metadata, ResolvingMetadata } from "next";
import ProductDetail from "./component/ProductDetail";

type Props = {
  params: { productId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const pathSplit = params.productId.split(".html");
  const idProduct = pathSplit[0].split("-")[pathSplit[0].split("-").length - 1];

  // fetch data
  const res = await axios.get<ApiResponse<IProduct>>(
    ApiPathEnum.Product + `/${idProduct}`
  );

  return {
    title: res.data.data?.name,
    description: res.data.data?.description,
  };
}

export default function ProductDetails({ params, searchParams }: Props) {
  return <ProductDetail />;
}
