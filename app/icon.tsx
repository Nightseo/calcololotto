import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon({ searchParams }: { searchParams?: { size?: string } }) {
  const iconSize = searchParams?.size ? parseInt(searchParams.size) : 32;
  const fontSize = iconSize * 0.75;

  return new ImageResponse(
    (
      <div
        style={{
          fontSize,
          background: '#f97316',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '20%',
        }}
      >
        🍀
      </div>
    ),
    {
      width: iconSize,
      height: iconSize,
    }
  );
}
