// app/api/admin/stats/route.ts
import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongo";
// import { env } from "@/lib/env";

export const GET = async () => {
  try {
    // 1. Get the DB instance
    const db = await getDb();

    // 2. Example stats: count users & orders
    const usersCount = await db.collection("users").countDocuments();
    const ordersCount = await db.collection("orders").countDocuments();

    // 3. Return JSON
    return NextResponse.json({
      users: usersCount,
      orders: ordersCount,
      uptime: `${process.uptime().toFixed(0)}s`,
    });
  } catch (err) {
    console.error("⚠️ /api/admin/stats error:", err);
    return NextResponse.json(
      { error: "Failed to load stats" },
      { status: 500 }
    );
  }
};
