(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function i(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=i(o);fetch(o.href,s)}})();const w={sharyo:{id:"sharyo",name:"車両形式",icon:"🚃",color:"#3b82f6"},rosen:{id:"rosen",name:"路線・駅",icon:"🗺️",color:"#10b981"},rekishi:{id:"rekishi",name:"鉄道史",icon:"📜",color:"#f59e0b"},gijutsu:{id:"gijutsu",name:"技術・運転",icon:"⚙️",color:"#8b5cf6"},yougo:{id:"yougo",name:"鉄道用語",icon:"📖",color:"#ec4899"},jikoku:{id:"jikoku",name:"ダイヤ・運行",icon:"🕐",color:"#06b6d4"}},m={beginner:{id:"beginner",name:"初級",desc:"鉄道入門者向け",multiplier:1},advanced:{id:"advanced",name:"上級",desc:"マイナー路線も知ってる",multiplier:1.5},mania:{id:"mania",name:"マニア級",desc:"車番まで覚えてる？",multiplier:2}},g=[{id:1,category:"sharyo",difficulty:"beginner",question:"東海道新幹線で運用されている700系の最高速度は？",options:["270km/h","285km/h","300km/h","320km/h"],answer:1,explanation:"700系は285km/hで運用。のぞみの一部列車で300km/h対応車両も存在しますが、通常運転は285km/hです。"},{id:2,category:"sharyo",difficulty:"beginner",question:"山手線で使用されているE235系の特徴的な車両配置は？",options:["6両編成","8両編成","10両編成","11両編成"],answer:3,explanation:"E235系は11両編成。先頭車両に運転台がなく、中間車両に運転台を設置するユニット方式を採用しています。"},{id:3,category:"sharyo",difficulty:"beginner",question:"0系新幹線の運転開始年は？",options:["1960年","1964年","1970年","1972年"],answer:1,explanation:"1964年10月1日、東京〜新大阪間で0系が営業運転を開始。東京オリンピック開催年の記念すべき日です。"},{id:4,category:"sharyo",difficulty:"advanced",question:"JR東日本のE5系新幹線の先頭車両の愛称は？",options:["F編成","P編成","T編成","H編成"],answer:1,explanation:"E5系の先頭車両は「P編成」と呼ばれ、先頭部の長い「ロングノーズ」が特徴です。"},{id:5,category:"sharyo",difficulty:"advanced",question:"東京メトロ千代田線で使用される6000系の主電圧は？",options:["600V","750V","1500V","3000V"],answer:1,explanation:"千代田線は第三軌条方式で750V。小田急線との直通運転に対応した車両設計です。"},{id:6,category:"sharyo",difficulty:"advanced",question:"近鉄特急「しまかぜ」で使用される車両形式は？",options:["21000系","22600系","50000系","80000系"],answer:2,explanation:"50000系6両編成。和風モダンな内装と観光特急としての高級感が特徴です。"},{id:7,category:"sharyo",difficulty:"mania",question:"国鉄103系の量産開始年と、最終的な製造両数に最も近い組み合わせは？",options:["1972年・約2,800両","1979年・約2,800両","1972年・約1,500両","1980年・約3,500両"],answer:0,explanation:"103系は1972年に量産開始。国鉄最大の量産車両で約2,800両が製造されました。"},{id:8,category:"sharyo",difficulty:"mania",question:"JR西日本の223系2000番台が投入された路線は？",options:["山陽本線（岡山〜広島）","福知山線","阪和線","おおさか東線"],answer:1,explanation:"223系2000番台は福知山線向けに開発。ワンマン運転対応と寒冷地仕様が特徴です。"},{id:9,category:"sharyo",difficulty:"mania",question:"東武鉄道100系（Spacia）の先頭車両の形式名は？",options:["100-1","100-11","100-51","100-81"],answer:2,explanation:"100系の先頭車両は100-51形。中間車両は100-52形、100-53形などがあります。"},{id:10,category:"rosen",difficulty:"beginner",question:"日本で最も乗降客数が多い駅は？",options:["東京駅","新宿駅","渋谷駅","池袋駅"],answer:1,explanation:"新宿駅はJR・私鉄・地下鉄を合わせて世界一の乗降客数を誇るターミナル駅です。"},{id:11,category:"rosen",difficulty:"beginner",question:"青函トンネルの全長は約何キロメートル？",options:["約27km","約34km","約54km","約82km"],answer:2,explanation:"青函トンネルは全長53.85km。1988年開通時は世界最長の海底トンネルでした。"},{id:12,category:"rosen",difficulty:"beginner",question:"北海道新幹線の終着駅は？",options:["旭川駅","函館駅","新函館北斗駅","札幌駅"],answer:2,explanation:"現在の終着は新函館北斗駅。2030年度を目標に札幌延伸が進行中です。"},{id:13,category:"rosen",difficulty:"advanced",question:"日本で最も標高の高い駅は？",options:["野沢温泉駅","簗場駅","甲斐大泉駅","高野山駅"],answer:1,explanation:"野岩鉄道会津鬼怒川線の簗場駅（標高1,345.67m）が日本一。野沢温泉駅は2位です。"},{id:14,category:"rosen",difficulty:"advanced",question:"「日本一の駅舎」として知られる札幌駅の時計台広場に面した正面は、何方向を向いている？",options:["北向き","東向き","南向き","西向き"],answer:0,explanation:"札幌駅の正面は北向き。北海道の開拓記念碑がある北広場が正面口です。"},{id:15,category:"rosen",difficulty:"advanced",question:"秩父鉄道の全線の軌間は？",options:["1,067mm","1,435mm","1,372mm","762mm"],answer:2,explanation:"秩父鉄道は1,372mm（3フィート6インチ）という日本では珍しい軌間を採用しています。"},{id:16,category:"rosen",difficulty:"mania",question:"JR東日本の「駅ナンバリング」で、宇都宮線の記号は？",options:["JU","JM","JU（東北本線と共通）","JY"],answer:2,explanation:"宇都宮線は東北本線の一部として「JU」記号を使用。上野〜黒磯間が対象です。"},{id:17,category:"rosen",difficulty:"mania",question:"伊豆急行線で使用される「アーティストカー」は何両編成で運用される？",options:["2両","3両","4両","6両"],answer:1,explanation:"アーティストカーは8000系3両編成。各車両に異なるアート作品が展示されています。"},{id:18,category:"rosen",difficulty:"mania",question:"土佐くろしお鉄道の「ごめん・なはり線」で、最も長い駅間距離は約何km？",options:["約8km","約12km","約18km","約25km"],answer:2,explanation:"ごめん・なはり線は駅間距離が長く、最長区間は約18kmに及びます。"},{id:19,category:"rekishi",difficulty:"beginner",question:"日本で最初の鉄道が開業した区間は？",options:["東京〜横浜","新橋〜横浜","大阪〜神戸","京都〜大阪"],answer:1,explanation:"1872年10月14日、新橋〜横浜間（現JR東海道線）で日本初の鉄道が開業しました。"},{id:20,category:"rekishi",difficulty:"beginner",question:"国鉄分割民営化（JR発足）が行われた年は？",options:["1985年","1987年","1989年","1991年"],answer:1,explanation:"1987年4月1日、国鉄がJR東日本・JR東海・JR西日本・JR九州・JR四国・JR北海道・JR貨物の7社に分割されました。"},{id:21,category:"rekishi",difficulty:"beginner",question:"東海道新幹線の開業年は？",options:["1958年","1964年","1972年","1975年"],answer:1,explanation:"1964年10月1日、東京〜新大阪間が開業。世界初の高速鉄道として歴史に名を刻みました。"},{id:22,category:"rekishi",difficulty:"advanced",question:"「鉄道の父」と呼ばれるイギリス人技術者の名前は？",options:["スティーブンソン","ワット","ファルコネット","トレヴィシック"],answer:0,explanation:"ジョージ・スティーブンソン卿。1825年に世界初の旅客列車を運転しました。"},{id:23,category:"rekishi",difficulty:"advanced",question:"国鉄の「ダイヤ改正の日」として有名な11月1日の改正が最初に行われたのは？",options:["1956年","1961年","1968年","1982年"],answer:1,explanation:"1961年11月1日のダイヤ改正で「ダイヤ改正の日」が定着。以降、11月1日は鉄道ファンにとって特別な日です。"},{id:24,category:"rekishi",difficulty:"advanced",question:"SL「C62 17号機」が達成した世界最高速度記録は？",options:["111.0km/h","129.0km/h","145.0km/h","175.0km/h"],answer:1,explanation:"1949年5月11日、C62 17号機が関西本線で129.0km/hを記録。蒸気機関車の世界記録です。"},{id:25,category:"rekishi",difficulty:"mania",question:"国鉄183系特急形電車が投入された最初の列車名は？",options:["ひので","つばさ","スーパーひたち","なすの"],answer:0,explanation:"1975年、183系は「ひので」として東海道線に投入。国鉄初の特急形交流電車でした。"},{id:26,category:"rekishi",difficulty:"mania",question:"「鉄道敷設法」が成立した年は？",options:["1889年","1892年","1896年","1906年"],answer:1,explanation:"1892年に鉄道敷設法が成立。以降、民間による鉄道建設が本格化しました。"},{id:27,category:"rekishi",difficulty:"mania",question:"阪急電鉄が「阪神急行電鉄」から「阪急電鉄」に社名変更した年は？",options:["1967年","1973年","1980年","1986年"],answer:1,explanation:"1973年10月1日に社名変更。「急行電鉄」から「電鉄」へとシンプルになりました。"},{id:28,category:"gijutsu",difficulty:"beginner",question:"在来線の標準的な軌間（JR線）の幅は？",options:["762mm","1,067mm","1,372mm","1,435mm"],answer:1,explanation:"JR在来線の標準軌間は1,067mm（狭軌）。新幹線は1,435mm（標準軌）です。"},{id:29,category:"gijutsu",difficulty:"beginner",question:"ATS-Pとは何の略称？",options:["自動列車停止装置（パターン方式）","自動列車制御装置","自動通話システム","自動転換装置"],answer:0,explanation:"ATS-PはAutomatic Train Stopのパターン方式。地上パターンに応じてブレーキを制御します。"},{id:30,category:"gijutsu",difficulty:"beginner",question:"新幹線の架線電圧は？",options:["1,500V","3,000V","20,000V","25,000V"],answer:3,explanation:"新幹線は交流25,000V。在来線の直流1,500Vとは大きく異なります。"},{id:31,category:"gijutsu",difficulty:"advanced",question:"JR東日本のE231系で採用されたVVVFインバータのメーカーは？",options:["日立製作所","東芝","三菱電機","東洋電機製造"],answer:2,explanation:"E231系は三菱電機製のIGBT-VVVFインバータを採用。省エネと静音性を実現しました。"},{id:32,category:"gijutsu",difficulty:"advanced",question:"「再生ブレーキ」とは何を意味する？",options:["電気を熱に変えて制動","電気を電力網に返す制動方式","空気ブレーキのみ使用","ディスクブレーキで制動"],answer:1,explanation:"再生ブレーキは電動機を発電機として動作させ、発生した電力を架線に返送する制動方式です。"},{id:33,category:"gijutsu",difficulty:"advanced",question:"ATC-NS（数字信号方式）を最初に導入した新幹線は？",options:["東海道新幹線","東北新幹線","上越新幹線","山陽新幹線"],answer:1,explanation:"東北新幹線（盛岡〜八戸間）が1982年にATC-NSを世界で初めて導入しました。"},{id:34,category:"gijutsu",difficulty:"mania",question:"JR東日本のE233系で採用された「全席ロングシート」の目的として正しいのは？",options:["座席数を増やすため","乗降時間短縮と混雑緩和","車両重量軽減","冷房効率向上"],answer:1,explanation:"ロングシートはドア付近の立席スペースを確保し、混雑時の乗降効率を高める設計です。"},{id:35,category:"gijutsu",difficulty:"mania",question:"営業運転で世界最速記録を持つ鉄道車両は？",options:["TGV POS","リニア中央新幹線","CRH380A","ICE 3"],answer:1,explanation:"2015年、リニア中央新幹線L0系が603km/hを記録。営業運転ではなく試験走行での記録です。"},{id:36,category:"gijutsu",difficulty:"mania",question:"「スカート」と呼ばれる車両の設備は何のこと？",options:["座席下の荷物置き","車体下部のカバー（流線型化）","運転台の遮蔽板","パンタグラフのカバー"],answer:1,explanation:"スカートは車体下部を覆うカバー。空気抵抗低減と騒音抑制が目的です。"},{id:37,category:"yougo",difficulty:"beginner",question:"「併結」とはどういう意味？",options:["2つの列車を連結して運転","車両を増結すること","異なる会社の直通運転","駅で待ち合わせ"],answer:0,explanation:"併結は目的地の異なる2編成を連結し、途中駅で分離する運転方式です。"},{id:38,category:"yougo",difficulty:"beginner",question:"「ホームドア」とは？",options:["改札口の自動ドア","ホームに設置された安全柵","車両の乗降ドア","駅舎の入口ドア"],answer:1,explanation:"ホームドア（可動式ホーム柵）は線路側の転落・飛び込み事故防止のための安全設備です。"},{id:39,category:"yougo",difficulty:"beginner",question:"「ロングシート」とは？",options:["長い座席（座席が1列のみ）","寝台列車の座席","特急のグリーン席","車両端の座席"],answer:0,explanation:"ロングシートは座席が1列のみの座席配置。立席スペースを多く確保できます。"},{id:40,category:"yougo",difficulty:"advanced",question:"「ユニット方式」とは？",options:["車両を1両単位で製造","動力分散方式で中間車に運転台","車両を連結して運転","1編成を1ユニットとして管理"],answer:1,explanation:"ユニット方式は中間車両に運転台を設置し、分割可能な編成構成。E235系などで採用されています。"},{id:41,category:"yougo",difficulty:"advanced",question:"「マルチプルユニット（MU）」の「M」と「U」は何を意味する？",options:["Motor & Unit","Multiple & Unit","Main & Utility","Machine & Undercarriage"],answer:1,explanation:"Multiple Unit＝複数の動力車を連結して1つの列車として運転する方式です。"},{id:42,category:"yougo",difficulty:"advanced",question:"「閉塞（へいそく）」の正しい説明は？",options:["駅の閉鎖","列車の進入を制御する区間管理","車両の検査","運転士の休憩"],answer:1,explanation:"閉塞は線路を区間に分割し、1区間に1列車のみ進入を許可する安全システムです。"},{id:43,category:"yougo",difficulty:"mania",question:"「ジャンパ線」とは？",options:["架線の補助線","車両間の電気連結ケーブル","信号機の配線","軌道回路のケーブル"],answer:1,explanation:"ジャンパ線は連結車両間の電気信号・制御回路を接続するケーブル群です。"},{id:44,category:"yougo",difficulty:"mania",question:"「デッドセクション」とは？",options:["廃止された駅","架線電圧が切り替わる区間","閉鎖された線区","信号がない区間"],answer:1,explanation:"デッドセクションは直流と交流、または異なる電圧の架線が切り替わる中性区間です。"},{id:45,category:"yougo",difficulty:"mania",question:"「フレキシブルバスバー」の主な用途は？",options:["車体の緩衝装置","パンタグラフと架線の接点改善","車輪の軸受","ブレーキの配管"],answer:1,explanation:"フレキシブルバスバーはパンタグラフ先端に取り付け、架線との安定した接点を保ちます。"},{id:46,category:"jikoku",difficulty:"beginner",question:"東海道新幹線の「のぞみ」は1日何本程度運転されている？",options:["約50本","約100本","約200本","約300本"],answer:2,explanation:"のぞみは東海道・山陽新幹線で1日約200本前後運転。最速の新幹線種別です。"},{id:47,category:"jikoku",difficulty:"beginner",question:"「快速」の正しい説明は？",options:["全駅停車","主要駅のみ停車","特急より速い","料金が高い"],answer:1,explanation:"快速は各駅停車より停車駅が少なく、特急より停車駅が多い中間的な種別です。"},{id:48,category:"jikoku",difficulty:"beginner",question:"山手線の内回り（外回り）の進行方向は？",options:["内回り：反時計回り、外回り：時計回り","内回り：時計回り、外回り：反時計回り","両方とも時計回り","両方とも反時計回り"],answer:0,explanation:"内回り（上り）は反時計回り、外回り（下り）は時計回り。上野→東京→品川→渋谷→新宿→池袋→上野です。"},{id:49,category:"jikoku",difficulty:"advanced",question:"「短絡運転」とは？",options:["列車を短く編成","本来の終着駅より手前で折り返す運転","迂回ルートで運転","速度を落として運転"],answer:1,explanation:"短絡運転は通常の運行区間より短い区間で折り返す運転。ダイヤ乱れ時などに行われます。"},{id:50,category:"jikoku",difficulty:"advanced",question:"JR東日本の「E233系5000番台」が投入された路線は？",options:["京浜東北線","横浜線","南武線","武蔵野線"],answer:1,explanation:"E233系5000番台は横浜線向け。京浜東北線・横浜線との直通運転に対応しています。"},{id:51,category:"jikoku",difficulty:"advanced",question:"「ライトアップ運転」とは？",options:["夜間の貸切列車","ヘッドライトを点灯した記念運転","イルミネーション車両の運転","SLの夜間運転"],answer:1,explanation:"ライトアップ運転は記念イベント等でヘッドライトを点灯して運転する特別運転です。"},{id:52,category:"jikoku",difficulty:"mania",question:"東武鉄道の「Spacia X」の最高速度は？",options:["110km/h","120km/h","130km/h","140km/h"],answer:2,explanation:"Spacia X（100系）は最高速度130km/h。東武鉄道の特急として2023年7月にデビューしました。"},{id:53,category:"jikoku",difficulty:"mania",question:"「折返し線」と「ループ線」の違いとして正しいのは？",options:["同じ意味","折返し線は終端、ループ線は途中","折返し線は平面、ループ線は立体","折返し線は単線、ループ線は複線"],answer:1,explanation:"折返し線は終着駅の構内に設置、ループ線は途中駅で方向転換する線路です。"},{id:54,category:"jikoku",difficulty:"mania",question:"JR西日本の「おおさか東線」全線開業は何年？",options:["2015年","2018年","2019年","2021年"],answer:2,explanation:"2019年3月16日、新大阪〜久宝寺間が開業し、おおさか東線が全線開業しました。"},{id:55,category:"sharyo",difficulty:"beginner",question:"500系新幹線の車体に使われた特徴的な配色は？",options:["白地に青いストライプ","白地に赤いストライプ","銀色一色","緑色一色"],answer:0,explanation:"500系は白地に青いストライプが特徴。1997年の登場時、その流線型デザインが話題になりました。"},{id:56,category:"sharyo",difficulty:"beginner",question:"JR東日本E233系が最初に投入された路線は？",options:["京浜東北線","中央線快速","埼京線","横浜線"],answer:1,explanation:"E233系0番台は2007年から中央線快速系に投入。のちに京浜東北線・埼京線などにも展開されました。"},{id:57,category:"sharyo",difficulty:"beginner",question:"東京メトロ丸ノ内線の現行主力車両形式は？",options:["02系","05系","03系","08系"],answer:1,explanation:"05系が2013年から順次導入。02系からの置き換えが進み、現在の丸ノ内線の主力です。"},{id:58,category:"sharyo",difficulty:"advanced",question:"小田急電鉄50000系（VSE）の特徴的な設備は？",options:["ロングシートのみ","先頭展望室","第三軌条式","気動車"],answer:1,explanation:"VSEは先頭車両に展望室を設けた観光特急向け車両。小田急ロマンスカーの看板車両です。"},{id:59,category:"sharyo",difficulty:"advanced",question:"成田エクスプレス（N'EX）で使用されるE259系の標準的な編成両数は？",options:["6両","9両","12両","16両"],answer:2,explanation:"E259系は基本的に12両編成。成田空港と都心を結ぶ特急列車として運用されています。"},{id:60,category:"sharyo",difficulty:"advanced",question:"JR北海道キハ283系特急形気動車の最高速度は？",options:["100km/h","110km/h","120km/h","130km/h"],answer:3,explanation:"キハ283系は最高速度130km/h。スーパー北斗など北海道の特急気動車の主力です。"},{id:61,category:"sharyo",difficulty:"mania",question:"国鉄165系急行形電車のうち、直流区間向けの形式名は？",options:["165系","167系","169系","171系"],answer:0,explanation:"165系が直流用、167・169・171系が交流区間向け。国鉄時代の急行形電車の代表的形式です。"},{id:62,category:"sharyo",difficulty:"mania",question:"JR西日本223系2500番台が投入された主な理由は？",options:["福知山線ワンマン対応","瀬戸内地区暖地向け","新幹線連絡強化","寒地仕様"],answer:1,explanation:"223系2500番台は瀬戸内地区の暖地向け仕様。岡山・広島方面の快速列車などで活躍しています。"},{id:63,category:"sharyo",difficulty:"mania",question:"東武鉄道500系（リバティ）の先頭車両の形式名は？",options:["500-1形","500-11形","500-51形","500-81形"],answer:2,explanation:"500系リバティの先頭車両は500-51形。中間車両は500-52形・500-53形などがあります。"},{id:64,category:"rosen",difficulty:"beginner",question:"青函トンネルを通る新幹線の名称は？",options:["東北新幹線","北海道新幹線","上越新幹線","北陸新幹線"],answer:1,explanation:"青函トンネルは北海道新幹線の一部。2016年に新青森〜新函館北斗間が開業しました。"},{id:65,category:"rosen",difficulty:"beginner",question:"都営地下鉄の路線のうち、日比谷線の記号は？",options:["H","M","T","S"],answer:0,explanation:"都営地下鉄日比谷線の記号はH（Hibiya）。銀座線（G）・丸ノ内線（M）などと区別されます。"},{id:66,category:"rosen",difficulty:"beginner",question:"日本で最初に開業した地下鉄路線は？",options:["東京メトロ銀座線","東京メトロ丸ノ内線","都営浅草線","大阪メトロ御堂筋線"],answer:0,explanation:"1927年12月30日、東京地下鉄道（現・銀座線）が上野〜浅草間で開業。日本初の地下鉄です。"},{id:67,category:"rosen",difficulty:"advanced",question:"世界遺産・屋久島へのアクセス拠点「吉松駅」がある路線は？",options:["JR肥薩線","鹿児島本線","日豊本線","指宿枕崎線"],answer:0,explanation:"吉松駅はJR九州肥薩線の駅。ここからバスで屋久島行きの高速船乗り場へ向かいます。"},{id:68,category:"rosen",difficulty:"advanced",question:"「モーニングライナー」を運行している私鉄は？",options:["小田急電鉄","京王電鉄","東急電鉄","西武鉄道"],answer:1,explanation:"京王電鉄がモーニングライナーを運行。新宿発の通勤特急として早朝に設定されています。"},{id:69,category:"rosen",difficulty:"advanced",question:"北陸新幹線（東京〜金沢）の東京側の起点駅は？",options:["上野駅","東京駅","大宮駅","高崎駅"],answer:0,explanation:"北陸新幹線は上野駅から始まり、東京駅経由で大宮方面へ。2015年に上野〜金沢間が開業しました。"},{id:70,category:"rosen",difficulty:"mania",question:"JR西日本の駅ナンバリング記号「JR-A01」が示す路線は？",options:["山陽本線","大阪環状線","京都線","姫新線"],answer:0,explanation:"JR-Aは山陽本線（神戸〜下関）の記号。JR-A01は神戸駅を表します。"},{id:71,category:"rosen",difficulty:"mania",question:"日本で最も短い駅名として知られる「宇」駅がある都道府県は？",options:["島根県","福島県","高知県","岩手県"],answer:0,explanation:"JR三江線の宇駅（うえき）は島根県にあり、1文字の駅名として鉄道ファンに有名です。"},{id:72,category:"rosen",difficulty:"mania",question:"伊豆急行線の起点・伊東駅でJR東日本と接続する路線は？",options:["伊東線","東海道本線","身延線","小田原線"],answer:0,explanation:"伊東駅はJR東日本伊東線と伊豆急行線の接続駅。伊豆半島への玄関口です。"},{id:73,category:"rekishi",difficulty:"beginner",question:"大阪市営地下鉄（現・Osaka Metro）で最初に開業した路線は？",options:["御堂筋線","谷町線","四つ橋線","中央線"],answer:0,explanation:"1933年5月20日、御堂筋線が心斎橋〜梅田間で開業。日本初の公営地下鉄として知られます。"},{id:74,category:"rekishi",difficulty:"beginner",question:"東日本大震災で被災した常磐線の全線復旧が完了した年は？",options:["2015年","2017年","2020年","2022年"],answer:2,explanation:"2020年3月14日、いわき〜仙台間が再開し、常磐線が全線復旧。復旧まで約9年を要しました。"},{id:75,category:"rekishi",difficulty:"beginner",question:"観光列車「SLやまぐち号」の運行区間の起点駅は？",options:["新山口駅","博多駅","小倉駅","下関駅"],answer:0,explanation:"SLやまぐち号は新山口駅を起点に、津和野・東益田方面へ運行される人気の観光列車です。"},{id:76,category:"rekishi",difficulty:"advanced",question:"世界初の地下鉄として1873年に部分開業したのは？",options:["ロンドン地下鉄","パリメトロ","ニューヨーク地下鉄","ベルリン地下鉄"],answer:0,explanation:"ロンドン地下鉄（メトロポリタン鉄道）が1873年に部分開業。世界最古の地下鉄として知られます。"},{id:77,category:"rekishi",difficulty:"advanced",question:"国鉄の「赤字83線」問題への対応として1980年に成立した法律は？",options:["日本国有鉄道再建法","旅客鉄道株式会社法","鉄道敷設法","地域運輸活性化法"],answer:0,explanation:"1980年の国鉄再建法により、赤字83線の廃止・第三セクター化などが本格化しました。"},{id:78,category:"rekishi",difficulty:"advanced",question:"青函トンネルが貨客両用で開通した年は？",options:["1985年","1988年","1991年","1994年"],answer:1,explanation:"1988年3月13日、青函トンネルが開通。同年の国鉄分割民営化とともに鉄道史の転換点となりました。"},{id:79,category:"rekishi",difficulty:"mania",question:"日本国有鉄道（国鉄）が成立した年は？",options:["1945年","1949年","1952年","1957年"],answer:1,explanation:"1949年6月1日、GHQの指示により日本国有鉄道が設立。1987年のJR発足まで存続しました。"},{id:80,category:"rekishi",difficulty:"mania",question:"京浜急行電鉄が「京急電鉄」に社名変更した年は？",options:["1948年","1957年","1968年","1972年"],answer:1,explanation:"1957年9月1日、京浜急行電鉄から京急電鉄へ改称。「京急」の略称が定着した契機です。"},{id:81,category:"rekishi",difficulty:"mania",question:"国鉄151系特急形電車の通称「ゴールデンカー」が活躍した主な列車種別は？",options:["寝台特急","座席特急","貨物列車","通勤電車"],answer:1,explanation:"151系は1958年登場の座席特急形電車。「こだま」「はと」など東海道線特急の象徴でした。"},{id:82,category:"gijutsu",difficulty:"beginner",question:"JR在来線で一般的に使われる直流架線電圧は？",options:["600V","750V","1500V","25000V"],answer:2,explanation:"JR在来線の標準は直流1500V。新幹線の交流25000Vとは大きく異なります。"},{id:83,category:"gijutsu",difficulty:"beginner",question:"線路と道路が立体交差する構造の名称は？",options:["踏切","立体交差","分岐器","渡り線"],answer:1,explanation:"立体交差は線路と道路を上下に分離する構造。踏切と異なり、列車と自動車が平面交差しません。"},{id:84,category:"gijutsu",difficulty:"beginner",question:"電車の「パンタグラフ」の主な役割は？",options:["速度計測","架線から電力を取得","ブレーキ制動","方向転換"],answer:1,explanation:"パンタグラフは架線に接触して電力を取り込む装置。電車の走行に不可欠な設備です。"},{id:85,category:"gijutsu",difficulty:"advanced",question:"日本で初めてATO（自動列車運転装置）を本格導入した地下鉄路線は？",options:["東京メトロ南北線","東京メトロ銀座線","都営大江戸線","Osaka Metro御堂筋線"],answer:0,explanation:"1985年開業の南北線が日本初のATO本格運用。ワンマン運転の先駆けとなりました。"},{id:86,category:"gijutsu",difficulty:"advanced",question:"JR東日本が在来線に導入している「ATACS」とは？",options:["列車無線システム","移動閉塞方式の列車制御","自動改札","車両検査装置"],answer:1,explanation:"ATACS（Advanced Train Administration and Communications System）は移動閉塞方式。列車間隔の効率化が可能です。"},{id:87,category:"gijutsu",difficulty:"advanced",question:"気動車の形式表記「DE」が示す動力伝達方式は？",options:["ディーゼル機関のみ","ディーゼル・エレクトリック","直流電気","ハイブリッド"],answer:1,explanation:"DEはDiesel Electric（ディーゼル・エレクトリック）の略。ディーゼルエンジンで発電し、電動機で走行します。"},{id:88,category:"gijutsu",difficulty:"mania",question:"新幹線などで使われる「シャーフェンベルグ式」連結器の特徴は？",options:["手動連結のみ","自動連結が可能","貨車専用","第三軌条用"],answer:1,explanation:"シャーフェンベルグ式は自動連結器。新幹線や近代的な電車で広く採用されています。"},{id:89,category:"gijutsu",difficulty:"mania",question:"VVVFインバータ制御の主なメリットは？",options:["加速性能向上と省エネ","車両重量の増加","架線電圧の上昇","騒音の増大"],answer:0,explanation:"VVVF制御はモーターへの電圧・周波数を可変制御。滑らかな加速と省エネを両立します。"},{id:90,category:"gijutsu",difficulty:"mania",question:"新幹線試験車両E956形（ALFA-X）の主な開発目的は？",options:["貨物輸送","360km/hレベルの技術開発","SL復活","在来線直通"],answer:1,explanation:"ALFA-Xは次世代新幹線の360km/h級走行技術を検証する試験車両。2019年に登場しました。"},{id:91,category:"yougo",difficulty:"beginner",question:"「終着駅」とはどういう駅？",options:["列車が折り返す最終の駅","途中の待避駅","貨物専用駅","信号場"],answer:0,explanation:"終着駅は列車がその路線の最後まで走り、折り返す駅。始発駅の反対概念です。"},{id:92,category:"yougo",difficulty:"beginner",question:"「緩和曲線」の役割として正しいのは？",options:["直線と曲線を滑らかにつなぐ","列車を待避させる","速度を上げる","踏切を設置する"],answer:0,explanation:"緩和曲線（トランジションカーブ）は直線から円曲线へ段階的に曲率を変え、乗り心地と安全性を確保します。"},{id:93,category:"yougo",difficulty:"beginner",question:"「回送列車」とは？",options:["旅客を乗せず車両を移動する列車","貨物のみ運ぶ列車","試験走行専用","最終便の各駅停車"],answer:0,explanation:"回送列車は旅客サービスを行わず、車両基地への入出庫などの移動を目的とした列車です。"},{id:94,category:"yougo",difficulty:"advanced",question:"「CTC（集中指令型列車運転制御）」とは？",options:["指令所から列車運転を集中制御する方式","車両点検システム","自動改札機","乗務員の勤務管理"],answer:0,explanation:"CTCは線区全体の信号・ポイントを指令所から集中制御するシステム。効率的な運行管理に不可欠です。"},{id:95,category:"yougo",difficulty:"advanced",question:"「最小閉塞区間」とは？",options:["閉塞を区分する最小の線区","待避線","分岐器","ホーム"],answer:0,explanation:"最小閉塞区間は1列車のみ進入を許可する最小単位の線区。列車間隔の安全確保の基本です。"},{id:96,category:"yougo",difficulty:"advanced",question:"運転用語「粘着」とは？",options:["モーターの力が車輪に伝わる状態","ブレーキが効いている状態","踏切が作動中","信号が赤の状態"],answer:0,explanation:"粘着はモーターの駆動力が車輪とレールの摩擦で伝わる状態。空転すると粘着を失います。"},{id:97,category:"yougo",difficulty:"mania",question:"「軌道回路」の主な用途は？",options:["踏切の警報","線路の通電で列車位置を検知","架線電圧の測定","車輪の温度監視"],answer:1,explanation:"軌道回路は線路に微弱電流を流し、列車の車軸による短絡で位置を検知する装置です。"},{id:98,category:"yougo",difficulty:"mania",question:"「スープレックス式」は何に関する装置の名称？",options:["蒸気機関車の自動空気ブレーキ","パンタグラフ","VVVFインバータ","ホームドア"],answer:0,explanation:"スープレックス式は蒸気機関車に用いられた自動空気ブレーキの方式。鉄道史の重要な技術です。"},{id:99,category:"yougo",difficulty:"mania",question:"「渡り線（クロスオーバー）」の主な用途は？",options:["上下線の相互乗り入れ","駅舎の建設","踏切の設置","架線の支持"],answer:0,explanation:"渡り線は上下線の間を連結する線路。列車の方向転換や車両基地への出入りに使われます。"},{id:100,category:"jikoku",difficulty:"beginner",question:"「各駅停車」列車の特徴として正しいのは？",options:["途中の全駅に停車する","特急区間のみ停車","夜間のみ運転","有料特急"],answer:0,explanation:"各駅停車は営業区間内のすべての駅に停車する列車種別。快速や特急より所要時間が長くなります。"},{id:101,category:"jikoku",difficulty:"beginner",question:"東海道新幹線の「こだま」の停車方式は？",options:["ほぼ全駅停車","主要駅のみ停車","東京〜新大阪ノンストップ","夜行のみ"],answer:0,explanation:"こだまは東海道・山陽新幹線の各停列車。のぞみ・ひかりより停車駅が多く、全線走破に時間がかかります。"},{id:102,category:"jikoku",difficulty:"beginner",question:"「始発列車」と「終着列車」の関係として正しいのは？",options:["始発は最初の駅から、終着は最後の駅まで走る","同じ意味","始発は貨物のみ","終着は快速のみ"],answer:0,explanation:"始発列車はその駅を最初の停車駅として出発し、終着列車はその駅で運行を終了する列車です。"},{id:103,category:"jikoku",difficulty:"advanced",question:"JR東日本の「Home Liner」など「ライナー」列車の主な設定目的は？",options:["通勤・通学のピーク輸送","観光特急","貨物輸送","試験走行"],answer:0,explanation:"Home Linerは通勤者向けの指定席（または座席指定）列車。朝の通勤時間帯に設定されています。"},{id:104,category:"jikoku",difficulty:"advanced",question:"鉄道用語「行路（こうろ）」とは？",options:["運転士・車掌の勤務スケジュール","線路の愛称","列車番号","駅構内の通路"],answer:0,explanation:"行路は運転士や車掌が1日の勤務で担当する列車・区間の組み合わせ。ダイヤ表とは別の概念です。"},{id:105,category:"jikoku",difficulty:"advanced",question:"JR旅客会社の列車番号で、下り列車に使われる奇偶の規則は？",options:["下り=偶数、上り=奇数","下り=奇数、上り=偶数","すべて奇数","ランダム"],answer:0,explanation:"JRでは下り列車が偶数、上り列車が奇数が基本。山手線の外回り（下り）も偶数番号です。"},{id:106,category:"jikoku",difficulty:"mania",question:"東武鉄道「リバティりょうもう」の運行起点駅は？",options:["浅草駅","赤城駅","新宿駅","上野駅"],answer:0,explanation:"りょうもうは浅草駅発の特急。伊勢崎線経由で群馬方面へ、北越急行との直通運転も行います。"},{id:107,category:"jikoku",difficulty:"mania",question:"山手線のピーク時最小運転時隔は約何分？",options:["約1分","約2分30秒","約5分","約10分"],answer:1,explanation:"山手線はピーク時に約2分30秒間隔で運転。日本でも有数の高密度ダイヤを誇ります。"},{id:108,category:"jikoku",difficulty:"mania",question:"JR列車番号の末尾アルファベット「Y」が示す列車の種別は？",options:["実車回送","試運転","貨物","特急"],answer:0,explanation:"末尾Yは実車回送列車を示す記号。旅客を乗せず車両を移動させる列車に付与されます。"}],b=[{min:0,name:"見習い駅員",icon:"🎫",color:"#94a3b8"},{min:500,name:"各駅停車マニア",icon:"🚃",color:"#60a5fa"},{min:1500,name:"快速マニア",icon:"🚄",color:"#34d399"},{min:3e3,name:"特急マニア",icon:"⭐",color:"#fbbf24"},{min:5e3,name:"新幹線マニア",icon:"💎",color:"#a78bfa"},{min:8e3,name:"鉄道博士",icon:"👑",color:"#f472b6"},{min:12e3,name:"伝説の車両基地長",icon:"🏆",color:"#ef4444"}],k=["車番暗記の鬼","ダイヤ表の達人","形式コレクター","終着駅ハンター","架線電圧マスター","併結運転のプロ","駅ナンバリング博士","トンネル探検家"];let d=null;function j(){"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js",{scope:"./"}).catch(()=>{})}),window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),d=e,R()}),window.addEventListener("appinstalled",()=>{d=null,h()}),I()&&!J()&&A()}function I(){return/iPad|iPhone|iPod/.test(navigator.userAgent)}function J(){return window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0}function R(){var n,i;if(document.getElementById("install-banner"))return;const e=document.createElement("div");e.id="install-banner",e.className="install-banner",e.innerHTML=`
    <img src="./icons/logo.png" alt="" class="install-banner-icon" width="40" height="40" />
    <div class="install-banner-text">
      <strong>アプリをインストール</strong>
      <span>ホーム画面からすぐにプレイ</span>
    </div>
    <button type="button" class="install-banner-btn" id="btn-install">追加</button>
    <button type="button" class="install-banner-close" id="btn-install-close" aria-label="閉じる">×</button>
  `,document.body.appendChild(e),(n=document.getElementById("btn-install"))==null||n.addEventListener("click",async()=>{d&&(d.prompt(),await d.userChoice,d=null,h())}),(i=document.getElementById("btn-install-close"))==null||i.addEventListener("click",h)}function A(){var n;if(localStorage.getItem("ios-install-dismissed")||document.getElementById("ios-install-hint"))return;const e=document.createElement("div");e.id="ios-install-hint",e.className="ios-install-hint",e.innerHTML=`
    <img src="./icons/logo.png" alt="" width="32" height="32" />
    <p><strong>ホーム画面に追加</strong> — 共有ボタン <span class="ios-share">⎙</span> から「ホーム画面に追加」</p>
    <button type="button" class="ios-hint-close" id="btn-ios-close" aria-label="閉じる">×</button>
  `,document.body.appendChild(e),(n=document.getElementById("btn-ios-close"))==null||n.addEventListener("click",()=>{localStorage.setItem("ios-install-dismissed","1"),e.remove()})}function h(){var e;(e=document.getElementById("install-banner"))==null||e.remove()}const q="densha-mania-quiz",V=e=>`./${e}`,t={screen:"home",category:null,difficulty:null,questions:[],currentIndex:0,score:0,streak:0,maxStreak:0,correct:0,wrong:0,timeLeft:30,timerId:null,answered:!1,selectedOption:null,stats:T()};function T(){try{const e=localStorage.getItem(q);if(e)return JSON.parse(e)}catch{}return{totalScore:0,gamesPlayed:0,bestStreak:0,totalCorrect:0,totalQuestions:0,categoryScores:{}}}function C(){localStorage.setItem(q,JSON.stringify(t.stats))}function x(e){let n=b[0];for(const i of b)e>=i.min&&(n=i);return n}function M(e){const n=[...e];for(let i=n.length-1;i>0;i--){const a=Math.floor(Math.random()*(i+1));[n[i],n[a]]=[n[a],n[i]]}return n}function O(e,n){let i=g;return e&&(i=i.filter(a=>a.category===e)),n&&(i=i.filter(a=>a.difficulty===n)),M(i).slice(0,10)}function S(e,n){t.category=e,t.difficulty=n,t.questions=O(e,n),t.currentIndex=0,t.score=0,t.streak=0,t.maxStreak=0,t.correct=0,t.wrong=0,t.answered=!1,t.selectedOption=null,t.screen="quiz",c(),E(),l()}function c(){t.timerId&&(clearInterval(t.timerId),t.timerId=null)}function E(){t.timeLeft=30,t.timerId=setInterval(()=>{t.timeLeft--,$(),t.timeLeft<=0&&H()},1e3)}function $(){const e=document.querySelector(".timer-bar-fill"),n=document.querySelector(".timer-text");e&&(e.style.width=`${t.timeLeft/30*100}%`),n&&(n.textContent=t.timeLeft),e&&e.classList.toggle("urgent",t.timeLeft<=10)}function H(){t.answered||(t.answered=!0,t.streak=0,t.wrong++,c(),l())}function B(e){if(t.answered)return;t.answered=!0,t.selectedOption=e,c();const n=t.questions[t.currentIndex],i=e===n.answer,a=m[t.difficulty||n.difficulty],o=i?100:0;if(i){t.correct++,t.streak++,t.streak>t.maxStreak&&(t.maxStreak=t.streak);const s=Math.floor(t.timeLeft*3),r=Math.min(t.streak-1,5)*20,v=Math.floor(o*(a.multiplier-1));t.score+=o+s+r+v}else t.wrong++,t.streak=0;l()}function P(){if(t.currentIndex++,t.answered=!1,t.selectedOption=null,t.currentIndex>=t.questions.length){N();return}c(),E(),l()}function N(){c(),t.screen="result",t.stats.totalScore+=t.score,t.stats.gamesPlayed++,t.stats.totalCorrect+=t.correct,t.stats.totalQuestions+=t.questions.length,t.maxStreak>t.stats.bestStreak&&(t.stats.bestStreak=t.maxStreak);const e=t.category||"all";t.stats.categoryScores[e]=(t.stats.categoryScores[e]||0)+t.score,C(),l()}function L(){c(),t.screen="home",l()}function U(){const e=x(t.stats.totalScore),n=t.stats.totalQuestions>0?Math.round(t.stats.totalCorrect/t.stats.totalQuestions*100):0,i=k[t.stats.gamesPlayed%k.length];return`
    <div class="screen home-screen">
      <header class="hero">
        <div class="hero-bg"></div>
        <div class="hero-content">
          <img class="logo-badge" src="${V("icons/logo.png")}" alt="" width="72" height="72" />
          <h1 class="title">電車マニアクイズ</h1>
          <p class="subtitle">鉄道知識の頂点を目指せ — 車両形式からダイヤまで</p>
          <div class="rank-card" style="--rank-color: ${e.color}">
            <span class="rank-icon">${e.icon}</span>
            <div>
              <div class="rank-name">${e.name}</div>
              <div class="rank-score">${t.stats.totalScore.toLocaleString()} pt</div>
            </div>
          </div>
        </div>
      </header>

      <section class="stats-bar">
        <div class="stat-item">
          <span class="stat-value">${t.stats.gamesPlayed}</span>
          <span class="stat-label">プレイ回数</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">${n}%</span>
          <span class="stat-label">正答率</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">${t.stats.bestStreak}</span>
          <span class="stat-label">最高連続</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">${g.length}</span>
          <span class="stat-label">問題数</span>
        </div>
      </section>

      <section class="section">
        <h2 class="section-title">難易度を選択</h2>
        <div class="difficulty-grid">
          ${Object.values(m).map(a=>`
            <button class="difficulty-card" data-difficulty="${a.id}">
              <span class="diff-name">${a.name}</span>
              <span class="diff-desc">${a.desc}</span>
              <span class="diff-mult">×${a.multiplier} ボーナス</span>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="section">
        <h2 class="section-title">カテゴリを選択 <span class="optional">（省略で全ジャンル）</span></h2>
        <div class="category-grid">
          <button class="category-card all-cat" data-category="">
            <span class="cat-icon">🎯</span>
            <span class="cat-name">全ジャンル</span>
            <span class="cat-count">${g.length}問</span>
          </button>
          ${Object.values(w).map(a=>{const o=g.filter(s=>s.category===a.id).length;return`
              <button class="category-card" data-category="${a.id}" style="--cat-color: ${a.color}">
                <span class="cat-icon">${a.icon}</span>
                <span class="cat-name">${a.name}</span>
                <span class="cat-count">${o}問</span>
              </button>
            `}).join("")}
        </div>
      </section>

      <section class="section mania-section">
        <div class="mania-quote">
          <p>「${i}」の称号を持つあなたへ</p>
          <p class="quote-text">車両形式も路線も、全部知ってるつもり？ 本当に？</p>
        </div>
      </section>
    </div>
  `}function Q(){const e=t.questions[t.currentIndex],n=w[e.category],i=m[e.difficulty],a=(t.currentIndex+1)/t.questions.length*100;let o=e.options.map((v,u)=>{let f="option-btn";return t.answered&&(u===e.answer?f+=" correct":u===t.selectedOption?f+=" wrong":f+=" dimmed"),`
        <button class="${f}" data-option="${u}" ${t.answered?"disabled":""}>
          <span class="option-letter">${String.fromCharCode(65+u)}</span>
          <span class="option-text">${v}</span>
        </button>
      `}).join("");const s=t.streak>=2?`<div class="streak-badge">🔥 ${t.streak}連続正解！</div>`:"",r=t.answered?`
      <div class="explanation ${t.selectedOption===e.answer?"correct-exp":"wrong-exp"}">
        <div class="exp-header">
          ${t.selectedOption===e.answer?"✅ 正解！":"❌ 不正解"}
        </div>
        <p>${e.explanation}</p>
        <button class="btn-next" id="btn-next">
          ${t.currentIndex<t.questions.length-1?"次の問題へ →":"結果を見る →"}
        </button>
      </div>
    `:"";return`
    <div class="screen quiz-screen">
      <div class="quiz-header">
        <button class="btn-back" id="btn-quit">✕ やめる</button>
        <div class="quiz-meta">
          <span class="meta-cat" style="--cat-color: ${n.color}">${n.icon} ${n.name}</span>
          <span class="meta-diff">${i.name}</span>
        </div>
        <div class="quiz-score">${t.score.toLocaleString()} pt</div>
      </div>

      <div class="progress-bar">
        <div class="progress-fill" style="width: ${a}%"></div>
      </div>
      <div class="progress-text">${t.currentIndex+1} / ${t.questions.length}</div>

      <div class="timer-container">
        <div class="timer-bar">
          <div class="timer-bar-fill"></div>
        </div>
        <span class="timer-text">30</span>
      </div>

      ${s}

      <div class="question-card">
        <h2 class="question-text">${e.question}</h2>
        <div class="options-grid">${o}</div>
        ${r}
      </div>
    </div>
  `}function z(){const e=Math.round(t.correct/t.questions.length*100),n=x(t.stats.totalScore);let i,a,o;e>=90?(i="鉄道博士級",a="👑",o="#fbbf24"):e>=70?(i="特急マニア",a="⭐",o="#a78bfa"):e>=50?(i="快速マニア",a="🚃",o="#60a5fa"):(i="各駅停車マニア",a="🎫",o="#94a3b8");const s=t.category?w[t.category].name:"全ジャンル",r=m[t.difficulty].name;return`
    <div class="screen result-screen">
      <div class="result-card">
        <div class="result-grade" style="--grade-color: ${o}">
          <span class="grade-icon">${a}</span>
          <h2>${i}</h2>
        </div>

        <div class="result-score-big">+${t.score.toLocaleString()}</div>
        <p class="result-sub">今回のスコア</p>

        <div class="result-stats">
          <div class="result-stat">
            <span class="rs-value">${t.correct}</span>
            <span class="rs-label">正解</span>
          </div>
          <div class="result-stat">
            <span class="rs-value">${t.wrong}</span>
            <span class="rs-label">不正解</span>
          </div>
          <div class="result-stat">
            <span class="rs-value">${e}%</span>
            <span class="rs-label">正答率</span>
          </div>
          <div class="result-stat">
            <span class="rs-value">${t.maxStreak}</span>
            <span class="rs-label">最高連続</span>
          </div>
        </div>

        <div class="result-info">
          <span>${s}</span>
          <span>•</span>
          <span>${r}</span>
        </div>

        <div class="total-rank">
          累計 ${t.stats.totalScore.toLocaleString()} pt — ${n.icon} ${n.name}
        </div>

        <div class="result-actions">
          <button class="btn-primary" id="btn-retry">もう一度挑戦</button>
          <button class="btn-secondary" id="btn-home">ホームへ</button>
        </div>
      </div>
    </div>
  `}let p="beginner",y="";function l(){const e=document.getElementById("app");switch(t.screen){case"home":e.innerHTML=U(),F();break;case"quiz":e.innerHTML=Q(),D(),$();break;case"result":e.innerHTML=z(),G();break}}function F(){document.querySelectorAll(".difficulty-card").forEach(e=>{e.classList.toggle("selected",e.dataset.difficulty===p),e.addEventListener("click",()=>{p=e.dataset.difficulty,document.querySelectorAll(".difficulty-card").forEach(n=>n.classList.toggle("selected",n.dataset.difficulty===p))})}),document.querySelectorAll(".category-card").forEach(e=>{e.classList.toggle("selected",e.dataset.category===y),e.addEventListener("click",()=>{y=e.dataset.category,document.querySelectorAll(".category-card").forEach(n=>n.classList.toggle("selected",n.dataset.category===y)),S(y||null,p)})})}function D(){document.querySelectorAll(".option-btn:not([disabled])").forEach(i=>{i.addEventListener("click",()=>B(Number(i.dataset.option)))});const e=document.getElementById("btn-next");e&&e.addEventListener("click",P);const n=document.getElementById("btn-quit");n&&n.addEventListener("click",()=>{confirm("クイズを中断しますか？スコアは保存されません。")&&(c(),L())})}function G(){var e,n;(e=document.getElementById("btn-retry"))==null||e.addEventListener("click",()=>{S(t.category,t.difficulty)}),(n=document.getElementById("btn-home"))==null||n.addEventListener("click",L)}j();l();
