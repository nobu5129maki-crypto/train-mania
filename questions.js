const QUIZ_DATA = {
  categories: [
    { id: 'vehicle', name: '車両形式', icon: '🚃', desc: '形式・編成・スペック' },
    { id: 'line', name: '路線・駅', icon: '🗺️', desc: '路線網・駅名・乗換' },
    { id: 'history', name: '鉄道史', icon: '📜', desc: '開業・廃止・歴史的事件' },
    { id: 'operation', name: '運転・信号', icon: '🚦', desc: '運転知識・信号・保安' },
    { id: 'mania', name: 'マニアック', icon: '🔥', desc: '超難問・豆知識' },
  ],

  difficulties: [
    { id: 'easy', name: '初級', color: '#22c55e', multiplier: 1 },
    { id: 'medium', name: '中級', color: '#f59e0b', multiplier: 2 },
    { id: 'hard', name: '上級', color: '#ef4444', multiplier: 3 },
    { id: 'mania', name: 'マニア', color: '#a855f7', multiplier: 5 },
  ],

  questions: [
    // 車両形式 - 初級
    {
      category: 'vehicle', difficulty: 'easy',
      question: '東海道新幹線で現在運用されている最新の車両形式は？',
      choices: ['700系', 'N700系', '500系', '0系'],
      answer: 1,
      explanation: 'N700系は2007年から導入された東海道・山陽新幹線の現行主力車両。0系・500系は引退済み、700系は徐々に置き換え中です。',
    },
    {
      category: 'vehicle', difficulty: 'easy',
      question: '山手線で運用されている車両形式は？',
      choices: ['E231系', 'E235系', '205系', '103系'],
      answer: 1,
      explanation: 'E235系が2015年から順次導入。E231系からの置き換えが進行中。103系・205系は引退済みです。',
    },
    {
      category: 'vehicle', difficulty: 'easy',
      question: '東京メトロ銀座線の車両形式は？',
      choices: ['01系', '1000系', '2000系', '13000系'],
      answer: 1,
      explanation: '銀座線は1000系（6両編成）が運用されています。01系は引退済みです。',
    },
    {
      category: 'vehicle', difficulty: 'easy',
      question: 'JR北海道の特急「スーパーおおぞら」で使用される車両は？',
      choices: ['キハ183系', 'キハ281系', 'キハ40系', 'キハ260系'],
      answer: 1,
      explanation: 'キハ281系「ファースト」がスーパーおおぞらの主力。キハ183系は引退が進んでいます。',
    },
    {
      category: 'vehicle', difficulty: 'easy',
      question: '近鉄の特急車両「あおざお」は何系？',
      choices: ['26000系', '50000系', '21000系', '80000系'],
      answer: 1,
      explanation: '50000系は近鉄の最新特急車両。26000系「さくらライナー」も現役ですが、あおざおは50000系です。',
    },

    // 車両形式 - 中級
    {
      category: 'vehicle', difficulty: 'medium',
      question: 'E5系新幹線の最高速度は？',
      choices: ['270km/h', '300km/h', '320km/h', '360km/h'],
      answer: 2,
      explanation: 'E5系は東北新幹線で320km/hで運転。北海道新幹線区間では260km/hに制限されます。',
    },
    {
      category: 'vehicle', difficulty: 'medium',
      question: 'JR東日本のE7系新幹線が運用される路線は？',
      choices: ['東北・上越・北陸新幹線', '東海道新幹線', '山陽新幹線', '九州新幹線'],
      answer: 0,
      explanation: 'E7系は東北・上越・北陸新幹線で運用。W7系は北陸新幹線金沢以南で運用されています。',
    },
    {
      category: 'vehicle', difficulty: 'medium',
      question: '東京メトロ丸ノ内線の最新車両形式は？',
      choices: ['02系', '2000系', '02-80形', '13000系'],
      answer: 2,
      explanation: '02-80形は2020年から導入された丸ノ内線の最新車両。従来の02系を置き換えています。',
    },
    {
      category: 'vehicle', difficulty: 'medium',
      question: '西武鉄道の特急「ラビューフォーメーション」で使用される車両は？',
      choices: ['10000系', '50000系', '60000系', '40000系'],
      answer: 1,
      explanation: '50000系は西武の最新特急車両。ラビューフォーメーションは池袋〜西武秩父間で運行。',
    },
    {
      category: 'vehicle', difficulty: 'medium',
      question: '名鉄のミュージックホーンを搭載した特急車両は？',
      choices: ['2200系', '3500系', '1200系', '9500系'],
      answer: 1,
      explanation: '3500系は名鉄の最新特急車両で、ミュージックホーンを搭載。2200系も現役です。',
    },

    // 車両形式 - 上級
    {
      category: 'vehicle', difficulty: 'hard',
      question: '0系新幹線の先頭車両の先端部の名称は？',
      choices: ['スノー・ノーズ', 'ダックビル', 'スラントノーズ', 'ロングノーズ'],
      answer: 0,
      explanation: '0系の先頭部は「スノー・ノーズ」と呼ばれ、空気抵抗を低減する設計でした。',
    },
    {
      category: 'vehicle', difficulty: 'hard',
      question: 'JR西日本の285系は何という特急に使用される？',
      choices: ['サンライズ瀬戸・出雲', 'はまかぜ', 'くろしお', 'やくも'],
      answer: 0,
      explanation: '285系は寝台特急「サンライズ瀬戸」「サンライズ出雲」専用の寝台電車です。',
    },
    {
      category: 'vehicle', difficulty: 'hard',
      question: '東急6000系の特徴的なデザインの名称は？',
      choices: ['ハーフビュレット', 'ハーフティンバーフレーム', 'ハーフティンバーフレーム＋ハーフビュレット', 'フルビュレット'],
      answer: 2,
      explanation: '6000系は「ハーフティンバーフレーム＋ハーフビュレット」デザインで知られています。',
    },

    // 路線・駅 - 初級
    {
      category: 'line', difficulty: 'easy',
      question: '日本で最も乗降客数が多い駅は？',
      choices: ['新宿駅', '渋谷駅', '池袋駅', '東京駅'],
      answer: 0,
      explanation: '新宿駅はJR・私鉄・地下鉄を合わせて世界一の乗降客数を誇ります。',
    },
    {
      category: 'line', difficulty: 'easy',
      question: '山手線は何駅を結ぶ環状線？',
      choices: ['29駅', '30駅', '31駅', '32駅'],
      answer: 0,
      explanation: '山手線は29駅を結ぶ環状線。内回り（外回り）で運転されています。',
    },
    {
      category: 'line', difficulty: 'easy',
      question: '東海道新幹線の起点駅は？',
      choices: ['東京駅', '新大阪駅', '品川駅', '名古屋駅'],
      answer: 0,
      explanation: '東海道新幹線は東京駅〜新大阪駅間。1964年の東京オリンピックに合わせて開業。',
    },
    {
      category: 'line', difficulty: 'easy',
      question: '京阪本線の起点・終点は？',
      choices: ['淀屋橋〜出町柳', '大阪梅田〜京都河原町', '天満宮〜三条', '京橋〜祇園四条'],
      answer: 0,
      explanation: '京阪本線は淀屋橋（大阪）〜出町柳（京都）間の路線です。',
    },
    {
      category: 'line', difficulty: 'easy',
      question: '中央線快速の終着駅（東京方面）は？',
      choices: ['東京駅', '新宿駅', '中野駅', '立川駅'],
      answer: 0,
      explanation: '中央線快速は東京駅〜高尾・甲府・松本・諏訪・塩尻方面。快速電車は東京始発です。',
    },

    // 路線・駅 - 中級
    {
      category: 'line', difficulty: 'medium',
      question: '日本最長の路線（営業キロ）を持つJR在来線は？',
      choices: ['山陰本線', '東海道本線', '五能線', '根室本線'],
      answer: 0,
      explanation: '山陰本線は京都〜下関間の約673km。JR在来線最長の路線です。',
    },
    {
      category: 'line', difficulty: 'medium',
      question: '東京メトロで最も長い路線は？',
      choices: ['丸ノ内線', '日比谷線', '半蔵門線', '東西線'],
      answer: 3,
      explanation: '東西線は約30.8km。丸ノ内線（24.0km）、日比谷線（20.3km）より長いです。',
    },
    {
      category: 'line', difficulty: 'medium',
      question: '北陸新幹線の敦賀延伸で新たに開業した駅は？',
      choices: ['小松・加賀温泉・芦原温泉・敦賀', '福井・越前たけふ・敦賀', '金沢・小松・敦賀', '福井・敦賀のみ'],
      answer: 1,
      explanation: '2024年3月、福井・越前たけふ・敦賀の3駅が開業。北陸新幹線が金沢から敦賀まで延伸しました。',
    },
    {
      category: 'line', difficulty: 'medium',
      question: '阪急電鉄で「宝塚本線」と「神戸本線」が分岐する駅は？',
      choices: ['十三駅', '中津駅', '塚口駅', '園田駅'],
      answer: 0,
      explanation: '十三駅で宝塚本線（梅田方面）と神戸本線（神戸三宮方面）に分岐します。',
    },

    // 路線・駅 - 上級
    {
      category: 'line', difficulty: 'hard',
      question: '日本で最も標高の高い駅は？',
      choices: ['野沢温泉駅', '甲斐大泉駅', '高野山駅', '大雪山駅'],
      answer: 1,
      explanation: '甲斐大泉駅（野岩鉄道会津鬼怒川線）は標高1,345m。日本最高地点の駅です。',
    },
    {
      category: 'line', difficulty: 'hard',
      question: '青函トンネル（現・津軽海峡線）の全長は約何km？',
      choices: ['約37km', '約44km', '約53km', '約63km'],
      answer: 2,
      explanation: '青函トンネルは全長約53.85km。世界最長の海底トンネルでした（現はギリシャが最長）。',
    },

    // 鉄道史 - 初級
    {
      category: 'history', difficulty: 'easy',
      question: '日本で最初の鉄道が開業したのは何年？',
      choices: ['1868年', '1872年', '1889年', '1906年'],
      answer: 1,
      explanation: '1872年10月14日、新橋〜横浜間（現・JR東日本・東海道本線）で日本初の鉄道が開業。',
    },
    {
      category: 'history', difficulty: 'easy',
      question: '東海道新幹線が開業した年は？',
      choices: ['1959年', '1964年', '1972年', '1975年'],
      answer: 1,
      explanation: '1964年10月1日、東京オリンピック開催に合わせて東海道新幹線が開業しました。',
    },
    {
      category: 'history', difficulty: 'easy',
      question: '0系新幹線が引退したのは何年？',
      choices: ['2005年', '2008年', '2011年', '2015年'],
      answer: 1,
      explanation: '2008年12月14日、0系の定期運用が終了。さよなら0系号で引退を飾りました。',
    },
    {
      category: 'history', difficulty: 'easy',
      question: 'JR各社への分割民営化が行われた年は？',
      choices: ['1985年', '1987年', '1989年', '1991年'],
      answer: 1,
      explanation: '1987年4月1日、国鉄分割民営化によりJR各社が誕生しました。',
    },

    // 鉄道史 - 中級
    {
      category: 'history', difficulty: 'medium',
      question: '東北新幹線が盛岡まで開業した年は？',
      choices: ['1982年', '1985年', '1991年', '2002年'],
      answer: 0,
      explanation: '1982年6月23日、東北新幹線が大宮〜盛岡間で開業。上越新幹線も同日開業。',
    },
    {
      category: 'history', difficulty: 'medium',
      question: '営団地下鉄（現・東京メトロ）が誕生した年は？',
      choices: ['1954年', '1960年', '1971年', '1978年'],
      answer: 0,
      explanation: '1954年、帝都高速度交通営団（営団地下鉄）が設立。銀座線・丸ノ内線を運営。',
    },
    {
      category: 'history', difficulty: 'medium',
      question: '山手線が環状運転を開始した年は？',
      choices: ['1925年', '1938年', '1956年', '1961年'],
      answer: 0,
      explanation: '1925年11月1日、田端〜神田間が開通し山手線が環状運転を開始しました。',
    },

    // 鉄道史 - 上級
    {
      category: 'history', difficulty: 'hard',
      question: '日本初の地下鉄として開業した路線は？',
      choices: ['銀座線', '丸ノ内線', '日比谷線', '東西線'],
      answer: 0,
      explanation: '1927年12月30日、銀座線（当時・東京地下鉄道）が上野〜浅草間で開業。日本初の地下鉄。',
    },
    {
      category: 'history', difficulty: 'hard',
      question: '国鉄の「ダイヤ改正の乱」が起きた年は？',
      choices: ['1982年', '1985年', '1987年', '1990年'],
      answer: 1,
      explanation: '1985年11月のダイヤ改正で大幅な列車削減が行われ、各地で抗議運動が起きました。',
    },

    // 運転・信号 - 初級
    {
      category: 'operation', difficulty: 'easy',
      question: 'ATS-Pとは何の略？',
      choices: ['Automatic Train Stop-Pattern', 'Automatic Train Safety-Protection', 'Advanced Train System-Platform', 'Automatic Track Signal-Point'],
      answer: 0,
      explanation: 'ATS-Pは「Automatic Train Stop-Pattern」。パターン方式の自動列車停止装置です。',
    },
    {
      category: 'operation', difficulty: 'easy',
      question: '新幹線の運転士が使用する制御装置の名称は？',
      choices: ['マスコン', 'ブレーキハンドル', 'マスコン・ブレーキハンドル', '運転台'],
      answer: 2,
      explanation: 'マスコン（加速）とブレーキハンドルが運転士の主要操作器具。総称して運転台。',
    },
    {
      category: 'operation', difficulty: 'easy',
      question: '在来線で最も一般的な閉塞方式は？',
      choices: ['自動閉塞', '単線閉塞', '連動閉塞', 'ATS閉塞'],
      answer: 0,
      explanation: '複線区間では自動閉塞が最も一般的。軌道回路で列車の位置を検知します。',
    },

    // 運転・信号 - 中級
    {
      category: 'operation', difficulty: 'medium',
      question: 'ATC（自動列車制御装置）の主な機能は？',
      choices: ['速度制限の自動制御', 'ドアの自動開閉', '放送の自動案内', '座席の自動予約'],
      answer: 0,
      explanation: 'ATCは地上からの信号に基づき、列車の速度を自動制御する装置。新幹線で使用。',
    },
    {
      category: 'operation', difficulty: 'medium',
      question: '「徐行」の定義で正しいものは？',
      choices: ['45km/h以下', '25km/h以下', '見通し距離が制動距離以内の速度', '停止するまでの速度'],
      answer: 2,
      explanation: '徐行は「見通し距離が制動距離以内になるような速度」で進むこと。具体的なkm/hは規定されていません。',
    },
    {
      category: 'operation', difficulty: 'medium',
      question: '新幹線の「のぞみ」号の停車駅数（東京〜新大阪）は？',
      choices: ['2駅', '3駅', '4駅', '5駅'],
      answer: 2,
      explanation: 'のぞみは東京・品川・新横浜・名古屋・京都・新大阪のうち、最小停車で品川・名古屋・京都等に停車。',
    },

    // 運転・信号 - 上級
    {
      category: 'operation', difficulty: 'hard',
      question: 'D-ATCの「D」は何を意味する？',
      choices: ['Digital', 'Direct', 'Dynamic', 'Dual'],
      answer: 0,
      explanation: 'D-ATCは「Digital ATC」。従来のATCをデジタル化した次世代列車制御システムです。',
    },

    // マニアック - 各難易度
    {
      category: 'mania', difficulty: 'easy',
      question: '「鉄道の日」は毎年何月何日？',
      choices: ['10月1日', '10月14日', '11月1日', '12月14日'],
      answer: 1,
      explanation: '10月14日は1872年の日本初の鉄道開業日。1972年から「鉄道の日」に制定。',
    },
    {
      category: 'mania', difficulty: 'easy',
      question: '車両の「M車」とは？',
      choices: ['動力車（モーター車）', '制御車', '付随車', '先頭車'],
      answer: 0,
      explanation: 'M = Motor（動力車）。電動機を搭載し、自力走行できる車両です。',
    },
    {
      category: 'mania', difficulty: 'medium',
      question: '「ミニ新幹線」と呼ばれる区間で正しいものは？',
      choices: ['山形新幹線（福島〜新庄）', '秋田新幹線（盛岡〜秋田）', '両方とも正しい', 'どちらでもない'],
      answer: 2,
      explanation: '山形新幹線・秋田新幹線は在来線ゲージ（1,067mm）の「ミニ新幹線」区間です。',
    },
    {
      category: 'mania', difficulty: 'medium',
      question: 'E5系の「グランクラス」は何号車に設置？',
      choices: ['1号車', '8号車', '10号車', '16号車'],
      answer: 2,
      explanation: 'E5系のグランクラスは10号車（東京方面から数えて）に設置された最上位席クラス。',
    },
    {
      category: 'mania', difficulty: 'hard',
      question: '「かもめ」の485系電車の愛称で知られる塗装の通称は？',
      choices: ['シーサイドライナー', 'ホワイトサマラー', 'サンライナー', 'ブルーライナー'],
      answer: 0,
      explanation: '485系「かもめ」の青と白の塗装は「シーサイドライナー」と呼ばれ、長崎の風土を象徴。',
    },
    {
      category: 'mania', difficulty: 'hard',
      question: '新幹線の「フルサージカー」とは？',
      choices: ['全車両が普通車の編成', '全車両がグリーン車の編成', '全車両が自由席の編成', '全車両が寝台車の編成'],
      answer: 0,
      explanation: 'フルサージカー = 全車普通車（サージカー）の編成。グリーン車を設けない編成のこと。',
    },
    {
      category: 'mania', difficulty: 'mania',
      question: '国鉄103系の量産開始年と、最後の新製車両が落成した年の差は？',
      choices: ['約15年', '約20年', '約25年', '約30年'],
      answer: 2,
      explanation: '103系は1964年に量産開始、最後の新製は1989年（クモハ103-3536）。約25年の長きにわたり製造。',
    },
    {
      category: 'mania', difficulty: 'mania',
      question: '東武100系「Spacia」の先頭車両先端部の角度は約何度？',
      choices: ['約5度', '約10度', '約15度', '約20度'],
      answer: 1,
      explanation: '東武100系のスラントノーズは約10度の角度。空気抵抗低減とデザイン性を両立。',
    },
    {
      category: 'mania', difficulty: 'mania',
      question: '「鉄道コレクション」の製造元である会社の本社所在地は？',
      choices: ['東京', '横浜', '大阪', '名古屋'],
      answer: 1,
      explanation: 'TOMIX（トミーテック）の鉄道コレクションは横浜本社のブランド。Nゲージの代名詞的存在。',
    },
    {
      category: 'mania', difficulty: 'mania',
      question: 'JR東日本の「E956形（ALFA-X）」の試験最高速度は？',
      choices: ['320km/h', '360km/h', '382km/h', '400km/h'],
      answer: 2,
      explanation: 'ALFA-Xは2019年に382km/hの試験走行を記録。次世代新幹線の技術試験車両。',
    },
    {
      category: 'mania', difficulty: 'mania',
      question: '営団地下鉄（現メトロ）の路線記号で「G」は何線？',
      choices: ['銀座線', '半蔵門線', '丸ノ内線', '日比谷線'],
      answer: 0,
      explanation: 'G = Ginza（銀座線）。M=丸ノ内、H=日比谷、T=東西、C=千代田、Y=有楽町、Z=半蔵門。',
    },
    {
      category: 'mania', difficulty: 'hard',
      question: '「サロン席」と「グリーン席」の違いで正しいのは？',
      choices: ['サロンは個室、グリーンは開放型特等席', '同じ意味', 'サロンは寝台、グリーンは座席', 'サロンは私鉄、グリーンはJR'],
      answer: 0,
      explanation: 'サロン席は個室型の特等席。グリーン席は開放型の特等席。両者は異なる席種です。',
    },
    {
      category: 'mania', difficulty: 'medium',
      question: '車両形式の「系」の数字は基本的に何を表す？',
      choices: ['製造年', '設計系列番号', '最高速度', '編成両数'],
      answer: 1,
      explanation: '「系」は設計系列番号。同一設計思想で製造された車両群を指します（例：E5系、N700系）。',
    },
    {
      category: 'vehicle', difficulty: 'mania',
      question: '国鉄時代の「新性能車」に含まれない車両は？',
      choices: ['151系', '181系', '103系', '583系'],
      answer: 2,
      explanation: '103系は1964年登場の量産通勤電車で「新性能車」には含まれません。151・181・583系は新性能車。',
    },
    {
      category: 'line', difficulty: 'mania',
      question: '「日本一の駅弁の駅」として有名な駅は？',
      choices: ['東京駅', '盛岡駅', '尾道駅', '糸魚川駅'],
      answer: 1,
      explanation: '盛岡駅は50種類以上の駅弁が揃う「駅弁の聖地」。いわて名物弁当などが有名。',
    },
    {
      category: 'history', difficulty: 'mania',
      question: '「鉄道唱歌」の作詞を担当した人物は？',
      choices: ['北村透谷', '島崎藤村', '正岡子規', '与謝野晶子'],
      answer: 1,
      explanation: '鉄道唱歌は島崎藤村が作詞。小学校の音楽科教材として広く親しまれました。',
    },
    {
      category: 'operation', difficulty: 'mania',
      question: '「閉塞」の「塞」は何を意味する？',
      choices: ['ふさぐ', 'あける', 'とおる', 'まつ'],
      answer: 0,
      explanation: '閉塞（へいそく）= 閉じて塞ぐ。区間に1列車のみ進入を許す方式のこと。',
    },
  ],
};
