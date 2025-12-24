import { NextRequest, NextResponse } from 'next/server';
import { readdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const day = searchParams.get('day');

    if (!day) {
      return NextResponse.json({ error: 'No day provided' }, { status: 400 });
    }

    const uploadsDir = join(process.cwd(), 'public', day, 'uploads');

    // Check if directory exists
    if (!existsSync(uploadsDir)) {
      return NextResponse.json({ photos: [] });
    }

    // Read all files in the uploads directory
    const files = await readdir(uploadsDir);

    // Filter for image files and create public paths
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif'];
    const photos = files
      .filter((file) => {
        const ext = file.toLowerCase().substring(file.lastIndexOf('.'));
        return imageExtensions.includes(ext);
      })
      .map((file) => `/${day}/uploads/${file}`)
      .sort()
      .reverse(); // Most recent first

    return NextResponse.json({ photos });
  } catch (error) {
    console.error('Error reading photos:', error);
    return NextResponse.json(
      { error: 'Failed to read photos' },
      { status: 500 }
    );
  }
}

