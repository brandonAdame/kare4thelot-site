import type { APIRoute } from "astro";
import { supabase } from "../../db/supabase";

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);

  const currentPage = parseInt(url.searchParams.get("page") ?? "1");
  const startDate = url.searchParams.get("startDate") ?? "";
  const endDate = url.searchParams.get("endDate") ?? "";

  const limit = 4; // Items per page
  const start = (currentPage - 1) * limit;
  const end = start + (limit - 1);

  try {
    let query = supabase
      .from("upcoming_events")
      .select("*", { count: "exact" });

    if (startDate) {
      query = query.gte("event_date", `${startDate}`);
    }

    if (endDate) {
      query = query.lte("event_date", `${endDate}`);
    }

    query = query.order("event_date", { ascending: true }).range(start, end);

    const { data: events, count, error } = await query;

    if (error) {
      console.log("🚀 ~ constGET:APIRoute= ~ error:", error);

      throw error;
    }

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
