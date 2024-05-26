import { json } from "@sveltejs/kit";
import { dbRef } from "$lib/firebase";
import { set } from "firebase/database";

export async function POST({ request }) {
	const { name, surname } = await request.json();
	const data = { name, surname };

	try {
		await set(dbRef, data);
		return json('Data written successfully');
	} catch (error) {
		return { status: 500, body: "Error writing data: " + error };
	}
}
