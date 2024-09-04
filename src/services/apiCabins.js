import supabase from "./supabase";

export async function getCabins() {
	const { data, error } = await supabase.from("cabins").select("*");

	if (error) {
		console.error(error);
		throw new Error("Cabins could not be loaded");
	}

	return data;
}
// https://klaxcklnibrbaycnmuve.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg