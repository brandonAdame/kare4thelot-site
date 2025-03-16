import type { APIRoute } from "astro";
import { supabase } from "../../db/supabase";

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);

  const currentPage = parseInt(url.searchParams.get("page") ?? "1");
  const limit = 4; // Items per page
  const start = (currentPage - 1) * limit;
  const end = start + (limit - 1);

  console.log("🚀 ~ constGET:APIRoute= ~ currentPage:", currentPage);

  try {
    const {
      data: events,
      count,
      error,
    } = await supabase
      .from("upcoming_events")
      .select("*", { count: "exact" })
      .range(start, end);

    if (error) throw error;

    return new Response(JSON.stringify({ events, count }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
