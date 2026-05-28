import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Email không hợp lệ' }, { status: 400 });
  }

  const res = await fetch(`${process.env.SUPABASE_URL}/rest/v1/email_leads`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': process.env.SUPABASE_ANON_KEY!,
      'Authorization': `Bearer ${process.env.SUPABASE_ANON_KEY}`,
      'Prefer': 'return=minimal',
    },
    body: JSON.stringify({ email, source: 'khinaodidep' }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error('Supabase error:', err);
    return NextResponse.json({ error: 'Không thể lưu email' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
