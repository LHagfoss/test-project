import { NextResponse } from 'next/server';

const jokes = [
  { joke: "Why did the scarecrow win an award? Because he was outstanding in his field!" },
  { joke: "I told my wife she was drawing her eyebrows too high. She looked surprised." },
  { joke: "I'm reading a book on anti-gravity. It's impossible to put down!" },
  { joke: "I told my wife she should embrace her mistakes. She gave me a hug." },
  { joke: "Why don't scientists trust atoms? Because they make up everything." },
  { joke: "Why don't eggs tell jokes? They'd crack each other up." },
  { joke: "Why did the tomato turn red? Because it saw the salad dressing!" },
  { joke: "What do you call a fake noodle? An impasta." },
  { joke: "Why did the bicycle fall over? Because it was two-tired." },
];

export async function GET() {
  try {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    return NextResponse.json(randomJoke);
  } catch (error) {
    console.error('Error fetching joke:', error);
    return NextResponse.error();
  }
} 