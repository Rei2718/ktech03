/* eslint-disable @next/next/no-img-element */
export default function ArtistSection() {
    const artists = [
      {
        name: "Alice Smith",
        avatar: "slide1.jpg",
        field: "イラストレーション",
        quote: "心に響く色彩を。",
        bio: "10年以上の経験を持つイラストレーター。鮮やかな色彩と独自のタッチで、見る人の心に物語を刻みます。",
        achievements: "国際的なギャラリーでの展示実績、複数のアワード受賞歴あり。",
        social: { twitter: "@aliceart", instagram: "@alice_art" },
      },
      {
        name: "Bob Johnson",
        avatar: "slide1.jpg",
        field: "グラフィックデザイン",
        quote: "シンプルの美しさ。",
        bio: "複雑なアイデアをシンプルなデザインで表現。大手ブランドとのコラボ実績も多数。",
        achievements: "デザイン雑誌に取り上げられた実績、世界中のプロジェクトに参画。",
        social: { twitter: "@bobjohnson", instagram: "@bobjdesign" },
      },
      {
        name: "Charlie Brown",
        avatar: "slide1.jpg",
        field: "アニメーション",
        quote: "動きで語る物語。",
        bio: "ダイナミックなアニメーションでキャラクターに命を吹き込み、視覚的なストーリーテリングを実現。",
        achievements: "大手アニメーションプロジェクトへの参加、業界内で高い評価を獲得。",
        social: { twitter: "@charlieanim", instagram: "@charlie_anim" },
      },
    ];
  
    return (
      <section className="relative py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-12 text-gray-800">
            アーティスト紹介
          </h2>
          <div className="space-y-12">
            {artists.map((artist, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-xl p-8 flex flex-col lg:flex-row items-center"
              >
                {/* アバター */}
                <img
                  src={artist.avatar}
                  alt={artist.name}
                  className="w-48 h-48 object-cover rounded-full border-4 border-gray-200"
                />
                {/* 詳細情報 */}
                <div className="mt-6 lg:mt-0 lg:ml-10 flex-1">
                  <h3 className="text-3xl font-semibold text-gray-800">
                    {artist.name}
                  </h3>
                  <p className="text-lg text-gray-600 mt-1">{artist.field}</p>
                  <p className="mt-4 text-xl italic text-gray-700">
                    {artist.quote}
                  </p>
                  <p className="mt-4 text-gray-700">{artist.bio}</p>
                  <p className="mt-2 text-gray-600">{artist.achievements}</p>
                  <div className="mt-4 flex space-x-4">
                    <a
                      href={`https://twitter.com/${artist.social.twitter.slice(1)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Twitter: {artist.social.twitter}
                    </a>
                    <a
                      href={`https://instagram.com/${artist.social.instagram.slice(1)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-500 hover:underline"
                    >
                      Instagram: {artist.social.instagram}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* 下部中央に配置する放射状ブラー効果 */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(253,224,71,0.8)_0%,rgba(253,224,71,0)_140%)] filter blur-[80px] pointer-events-none"></div>
      </section>
    );
  }
  