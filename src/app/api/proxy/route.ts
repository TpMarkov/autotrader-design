import { NextResponse } from 'next/server';

const BASE_URL = 'https://mc-api.marketcheck.com';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const endpoint = searchParams.get('endpoint');
  
  if (!endpoint) {
    return NextResponse.json({ error: 'Endpoint parameter is required' }, { status: 400 });
  }

  // Extract other query params to forward
  const forwardParams = new URLSearchParams();
  searchParams.forEach((value, key) => {
    if (key !== 'endpoint') {
      forwardParams.append(key, value);
    }
  });

  // Attach API Key
  const apiKey = process.env.MARKETCHECK_API_KEY;
  if (!apiKey) {
    console.error('MARKETCHECK_API_KEY is missing in environment variables');
    return NextResponse.json({ error: 'Missing API key configuration. Please ensure MARKETCHECK_API_KEY is set in your environment.' }, { status: 500 });
  }
  forwardParams.append('api_key', apiKey);

  const url = `${BASE_URL}${endpoint}?${forwardParams.toString()}`;

  try {
    console.log(`Proxying request to: ${url.replace(apiKey, 'REDACTED')}`);
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Marketcheck API error (${response.status}):`, errorText);
      return NextResponse.json({ error: `Marketcheck API error: ${response.statusText}`, details: errorText }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to fetch from Marketcheck API';
    console.error('Proxy error:', errorMessage);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
