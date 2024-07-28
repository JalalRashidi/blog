import { NextResponse,NextRequest } from "next/server";
const GET= ()=>{
    return NextResponse.json({"message":"hello world"})
}
export {GET};