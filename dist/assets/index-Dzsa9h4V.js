(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();const v={sharyo:{id:"sharyo",name:"車両形式",icon:"🚃",color:"#3b82f6"},rosen:{id:"rosen",name:"路線・駅",icon:"🗺️",color:"#10b981"},rekishi:{id:"rekishi",name:"鉄道史",icon:"📜",color:"#f59e0b"},gijutsu:{id:"gijutsu",name:"技術・運転",icon:"⚙️",color:"#8b5cf6"},yougo:{id:"yougo",name:"鉄道用語",icon:"📖",color:"#ec4899"},jikoku:{id:"jikoku",name:"ダイヤ・運行",icon:"🕐",color:"#06b6d4"}},y={beginner:{id:"beginner",name:"初級",desc:"鉄道入門者向け",multiplier:1},advanced:{id:"advanced",name:"上級",desc:"マイナー路線も知ってる",multiplier:1.5},mania:{id:"mania",name:"マニア級",desc:"車番まで覚えてる？",multiplier:2}},m=[{id:1,category:"sharyo",difficulty:"beginner",question:"東海道新幹線で運用されている700系の最高速度は？",options:["270km/h","285km/h","300km/h","320km/h"],answer:1,explanation:"700系は285km/hで運用。のぞみの一部列車で300km/h対応車両も存在しますが、通常運転は285km/hです。"},{id:2,category:"sharyo",difficulty:"beginner",question:"山手線で使用されているE235系の特徴的な車両配置は？",options:["6両編成","8両編成","10両編成","11両編成"],answer:3,explanation:"E235系は11両編成。先頭車両に運転台がなく、中間車両に運転台を設置するユニット方式を採用しています。"},{id:3,category:"sharyo",difficulty:"beginner",question:"0系新幹線の運転開始年は？",options:["1960年","1964年","1970年","1972年"],answer:1,explanation:"1964年10月1日、東京〜新大阪間で0系が営業運転を開始。東京オリンピック開催年の記念すべき日です。"},{id:4,category:"sharyo",difficulty:"advanced",question:"JR東日本のE5系新幹線の先頭車両の愛称は？",options:["F編成","P編成","T編成","H編成"],answer:1,explanation:"E5系の先頭車両は「P編成」と呼ばれ、先頭部の長い「ロングノーズ」が特徴です。"},{id:5,category:"sharyo",difficulty:"advanced",question:"東京メトロ千代田線で使用される6000系の主電圧は？",options:["600V","750V","1500V","3000V"],answer:1,explanation:"千代田線は第三軌条方式で750V。小田急線との直通運転に対応した車両設計です。"},{id:6,category:"sharyo",difficulty:"advanced",question:"近鉄特急「しまかぜ」で使用される車両形式は？",options:["21000系","22600系","50000系","80000系"],answer:2,explanation:"50000系6両編成。和風モダンな内装と観光特急としての高級感が特徴です。"},{id:7,category:"sharyo",difficulty:"mania",question:"国鉄103系の量産開始年と、最終的な製造両数に最も近い組み合わせは？",options:["1972年・約2,800両","1979年・約2,800両","1972年・約1,500両","1980年・約3,500両"],answer:0,explanation:"103系は1972年に量産開始。国鉄最大の量産車両で約2,800両が製造されました。"},{id:8,category:"sharyo",difficulty:"mania",question:"JR西日本の223系2000番台が投入された路線は？",options:["山陽本線（岡山〜広島）","福知山線","阪和線","おおさか東線"],answer:1,explanation:"223系2000番台は福知山線向けに開発。ワンマン運転対応と寒冷地仕様が特徴です。"},{id:9,category:"sharyo",difficulty:"mania",question:"東武鉄道100系（Spacia）の先頭車両の形式名は？",options:["100-1","100-11","100-51","100-81"],answer:2,explanation:"100系の先頭車両は100-51形。中間車両は100-52形、100-53形などがあります。"},{id:10,category:"rosen",difficulty:"beginner",question:"日本で最も乗降客数が多い駅は？",options:["東京駅","新宿駅","渋谷駅","池袋駅"],answer:1,explanation:"新宿駅はJR・私鉄・地下鉄を合わせて世界一の乗降客数を誇るターミナル駅です。"},{id:11,category:"rosen",difficulty:"beginner",question:"青函トンネルの全長は約何キロメートル？",options:["約27km","約34km","約54km","約82km"],answer:2,explanation:"青函トンネルは全長53.85km。1988年開通時は世界最長の海底トンネルでした。"},{id:12,category:"rosen",difficulty:"beginner",question:"北海道新幹線の終着駅は？",options:["旭川駅","函館駅","新函館北斗駅","札幌駅"],answer:2,explanation:"現在の終着は新函館北斗駅。2030年度を目標に札幌延伸が進行中です。"},{id:13,category:"rosen",difficulty:"advanced",question:"日本で最も標高の高い駅は？",options:["野沢温泉駅","簗場駅","甲斐大泉駅","高野山駅"],answer:1,explanation:"野岩鉄道会津鬼怒川線の簗場駅（標高1,345.67m）が日本一。野沢温泉駅は2位です。"},{id:14,category:"rosen",difficulty:"advanced",question:"「日本一の駅舎」として知られる札幌駅の時計台広場に面した正面は、何方向を向いている？",options:["北向き","東向き","南向き","西向き"],answer:0,explanation:"札幌駅の正面は北向き。北海道の開拓記念碑がある北広場が正面口です。"},{id:15,category:"rosen",difficulty:"advanced",question:"秩父鉄道の全線の軌間は？",options:["1,067mm","1,435mm","1,372mm","762mm"],answer:2,explanation:"秩父鉄道は1,372mm（3フィート6インチ）という日本では珍しい軌間を採用しています。"},{id:16,category:"rosen",difficulty:"mania",question:"JR東日本の「駅ナンバリング」で、宇都宮線の記号は？",options:["JU","JM","JU（東北本線と共通）","JY"],answer:2,explanation:"宇都宮線は東北本線の一部として「JU」記号を使用。上野〜黒磯間が対象です。"},{id:17,category:"rosen",difficulty:"mania",question:"伊豆急行線で使用される「アーティストカー」は何両編成で運用される？",options:["2両","3両","4両","6両"],answer:1,explanation:"アーティストカーは8000系3両編成。各車両に異なるアート作品が展示されています。"},{id:18,category:"rosen",difficulty:"mania",question:"土佐くろしお鉄道の「ごめん・なはり線」で、最も長い駅間距離は約何km？",options:["約8km","約12km","約18km","約25km"],answer:2,explanation:"ごめん・なはり線は駅間距離が長く、最長区間は約18kmに及びます。"},{id:19,category:"rekishi",difficulty:"beginner",question:"日本で最初の鉄道が開業した区間は？",options:["東京〜横浜","新橋〜横浜","大阪〜神戸","京都〜大阪"],answer:1,explanation:"1872年10月14日、新橋〜横浜間（現JR東海道線）で日本初の鉄道が開業しました。"},{id:20,category:"rekishi",difficulty:"beginner",question:"国鉄分割民営化（JR発足）が行われた年は？",options:["1985年","1987年","1989年","1991年"],answer:1,explanation:"1987年4月1日、国鉄がJR東日本・JR東海・JR西日本・JR九州・JR四国・JR北海道・JR貨物の7社に分割されました。"},{id:21,category:"rekishi",difficulty:"beginner",question:"東海道新幹線の開業年は？",options:["1958年","1964年","1972年","1975年"],answer:1,explanation:"1964年10月1日、東京〜新大阪間が開業。世界初の高速鉄道として歴史に名を刻みました。"},{id:22,category:"rekishi",difficulty:"advanced",question:"「鉄道の父」と呼ばれるイギリス人技術者の名前は？",options:["スティーブンソン","ワット","ファルコネット","トレヴィシック"],answer:0,explanation:"ジョージ・スティーブンソン卿。1825年に世界初の旅客列車を運転しました。"},{id:23,category:"rekishi",difficulty:"advanced",question:"国鉄の「ダイヤ改正の日」として有名な11月1日の改正が最初に行われたのは？",options:["1956年","1961年","1968年","1982年"],answer:1,explanation:"1961年11月1日のダイヤ改正で「ダイヤ改正の日」が定着。以降、11月1日は鉄道ファンにとって特別な日です。"},{id:24,category:"rekishi",difficulty:"advanced",question:"SL「C62 17号機」が達成した世界最高速度記録は？",options:["111.0km/h","129.0km/h","145.0km/h","175.0km/h"],answer:1,explanation:"1949年5月11日、C62 17号機が関西本線で129.0km/hを記録。蒸気機関車の世界記録です。"},{id:25,category:"rekishi",difficulty:"mania",question:"国鉄183系特急形電車が投入された最初の列車名は？",options:["ひので","つばさ","スーパーひたち","なすの"],answer:0,explanation:"1975年、183系は「ひので」として東海道線に投入。国鉄初の特急形交流電車でした。"},{id:26,category:"rekishi",difficulty:"mania",question:"「鉄道敷設法」が成立した年は？",options:["1889年","1892年","1896年","1906年"],answer:1,explanation:"1892年に鉄道敷設法が成立。以降、民間による鉄道建設が本格化しました。"},{id:27,category:"rekishi",difficulty:"mania",question:"阪急電鉄が「阪神急行電鉄」から「阪急電鉄」に社名変更した年は？",options:["1967年","1973年","1980年","1986年"],answer:1,explanation:"1973年10月1日に社名変更。「急行電鉄」から「電鉄」へとシンプルになりました。"},{id:28,category:"gijutsu",difficulty:"beginner",question:"在来線の標準的な軌間（JR線）の幅は？",options:["762mm","1,067mm","1,372mm","1,435mm"],answer:1,explanation:"JR在来線の標準軌間は1,067mm（狭軌）。新幹線は1,435mm（標準軌）です。"},{id:29,category:"gijutsu",difficulty:"beginner",question:"ATS-Pとは何の略称？",options:["自動列車停止装置（パターン方式）","自動列車制御装置","自動通話システム","自動転換装置"],answer:0,explanation:"ATS-PはAutomatic Train Stopのパターン方式。地上パターンに応じてブレーキを制御します。"},{id:30,category:"gijutsu",difficulty:"beginner",question:"新幹線の架線電圧は？",options:["1,500V","3,000V","20,000V","25,000V"],answer:3,explanation:"新幹線は交流25,000V。在来線の直流1,500Vとは大きく異なります。"},{id:31,category:"gijutsu",difficulty:"advanced",question:"JR東日本のE231系で採用されたVVVFインバータのメーカーは？",options:["日立製作所","東芝","三菱電機","東洋電機製造"],answer:2,explanation:"E231系は三菱電機製のIGBT-VVVFインバータを採用。省エネと静音性を実現しました。"},{id:32,category:"gijutsu",difficulty:"advanced",question:"「再生ブレーキ」とは何を意味する？",options:["電気を熱に変えて制動","電気を電力網に返す制動方式","空気ブレーキのみ使用","ディスクブレーキで制動"],answer:1,explanation:"再生ブレーキは電動機を発電機として動作させ、発生した電力を架線に返送する制動方式です。"},{id:33,category:"gijutsu",difficulty:"advanced",question:"ATC-NS（数字信号方式）を最初に導入した新幹線は？",options:["東海道新幹線","東北新幹線","上越新幹線","山陽新幹線"],answer:1,explanation:"東北新幹線（盛岡〜八戸間）が1982年にATC-NSを世界で初めて導入しました。"},{id:34,category:"gijutsu",difficulty:"mania",question:"JR東日本のE233系で採用された「全席ロングシート」の目的として正しいのは？",options:["座席数を増やすため","乗降時間短縮と混雑緩和","車両重量軽減","冷房効率向上"],answer:1,explanation:"ロングシートはドア付近の立席スペースを確保し、混雑時の乗降効率を高める設計です。"},{id:35,category:"gijutsu",difficulty:"mania",question:"営業運転で世界最速記録を持つ鉄道車両は？",options:["TGV POS","リニア中央新幹線","CRH380A","ICE 3"],answer:1,explanation:"2015年、リニア中央新幹線L0系が603km/hを記録。営業運転ではなく試験走行での記録です。"},{id:36,category:"gijutsu",difficulty:"mania",question:"「スカート」と呼ばれる車両の設備は何のこと？",options:["座席下の荷物置き","車体下部のカバー（流線型化）","運転台の遮蔽板","パンタグラフのカバー"],answer:1,explanation:"スカートは車体下部を覆うカバー。空気抵抗低減と騒音抑制が目的です。"},{id:37,category:"yougo",difficulty:"beginner",question:"「併結」とはどういう意味？",options:["2つの列車を連結して運転","車両を増結すること","異なる会社の直通運転","駅で待ち合わせ"],answer:0,explanation:"併結は目的地の異なる2編成を連結し、途中駅で分離する運転方式です。"},{id:38,category:"yougo",difficulty:"beginner",question:"「ホームドア」とは？",options:["改札口の自動ドア","ホームに設置された安全柵","車両の乗降ドア","駅舎の入口ドア"],answer:1,explanation:"ホームドア（可動式ホーム柵）は線路側の転落・飛び込み事故防止のための安全設備です。"},{id:39,category:"yougo",difficulty:"beginner",question:"「ロングシート」とは？",options:["長い座席（座席が1列のみ）","寝台列車の座席","特急のグリーン席","車両端の座席"],answer:0,explanation:"ロングシートは座席が1列のみの座席配置。立席スペースを多く確保できます。"},{id:40,category:"yougo",difficulty:"advanced",question:"「ユニット方式」とは？",options:["車両を1両単位で製造","動力分散方式で中間車に運転台","車両を連結して運転","1編成を1ユニットとして管理"],answer:1,explanation:"ユニット方式は中間車両に運転台を設置し、分割可能な編成構成。E235系などで採用されています。"},{id:41,category:"yougo",difficulty:"advanced",question:"「マルチプルユニット（MU）」の「M」と「U」は何を意味する？",options:["Motor & Unit","Multiple & Unit","Main & Utility","Machine & Undercarriage"],answer:1,explanation:"Multiple Unit＝複数の動力車を連結して1つの列車として運転する方式です。"},{id:42,category:"yougo",difficulty:"advanced",question:"「閉塞（へいそく）」の正しい説明は？",options:["駅の閉鎖","列車の進入を制御する区間管理","車両の検査","運転士の休憩"],answer:1,explanation:"閉塞は線路を区間に分割し、1区間に1列車のみ進入を許可する安全システムです。"},{id:43,category:"yougo",difficulty:"mania",question:"「ジャンパ線」とは？",options:["架線の補助線","車両間の電気連結ケーブル","信号機の配線","軌道回路のケーブル"],answer:1,explanation:"ジャンパ線は連結車両間の電気信号・制御回路を接続するケーブル群です。"},{id:44,category:"yougo",difficulty:"mania",question:"「デッドセクション」とは？",options:["廃止された駅","架線電圧が切り替わる区間","閉鎖された線区","信号がない区間"],answer:1,explanation:"デッドセクションは直流と交流、または異なる電圧の架線が切り替わる中性区間です。"},{id:45,category:"yougo",difficulty:"mania",question:"「フレキシブルバスバー」の主な用途は？",options:["車体の緩衝装置","パンタグラフと架線の接点改善","車輪の軸受","ブレーキの配管"],answer:1,explanation:"フレキシブルバスバーはパンタグラフ先端に取り付け、架線との安定した接点を保ちます。"},{id:46,category:"jikoku",difficulty:"beginner",question:"東海道新幹線の「のぞみ」は1日何本程度運転されている？",options:["約50本","約100本","約200本","約300本"],answer:2,explanation:"のぞみは東海道・山陽新幹線で1日約200本前後運転。最速の新幹線種別です。"},{id:47,category:"jikoku",difficulty:"beginner",question:"「快速」の正しい説明は？",options:["全駅停車","主要駅のみ停車","特急より速い","料金が高い"],answer:1,explanation:"快速は各駅停車より停車駅が少なく、特急より停車駅が多い中間的な種別です。"},{id:48,category:"jikoku",difficulty:"beginner",question:"山手線の内回り（外回り）の進行方向は？",options:["内回り：反時計回り、外回り：時計回り","内回り：時計回り、外回り：反時計回り","両方とも時計回り","両方とも反時計回り"],answer:0,explanation:"内回り（上り）は反時計回り、外回り（下り）は時計回り。上野→東京→品川→渋谷→新宿→池袋→上野です。"},{id:49,category:"jikoku",difficulty:"advanced",question:"「短絡運転」とは？",options:["列車を短く編成","本来の終着駅より手前で折り返す運転","迂回ルートで運転","速度を落として運転"],answer:1,explanation:"短絡運転は通常の運行区間より短い区間で折り返す運転。ダイヤ乱れ時などに行われます。"},{id:50,category:"jikoku",difficulty:"advanced",question:"JR東日本の「E233系5000番台」が投入された路線は？",options:["京浜東北線","横浜線","南武線","武蔵野線"],answer:1,explanation:"E233系5000番台は横浜線向け。京浜東北線・横浜線との直通運転に対応しています。"},{id:51,category:"jikoku",difficulty:"advanced",question:"「ライトアップ運転」とは？",options:["夜間の貸切列車","ヘッドライトを点灯した記念運転","イルミネーション車両の運転","SLの夜間運転"],answer:1,explanation:"ライトアップ運転は記念イベント等でヘッドライトを点灯して運転する特別運転です。"},{id:52,category:"jikoku",difficulty:"mania",question:"東武鉄道の「Spacia X」の最高速度は？",options:["110km/h","120km/h","130km/h","140km/h"],answer:2,explanation:"Spacia X（100系）は最高速度130km/h。東武鉄道の特急として2023年7月にデビューしました。"},{id:53,category:"jikoku",difficulty:"mania",question:"「折返し線」と「ループ線」の違いとして正しいのは？",options:["同じ意味","折返し線は終端、ループ線は途中","折返し線は平面、ループ線は立体","折返し線は単線、ループ線は複線"],answer:1,explanation:"折返し線は終着駅の構内に設置、ループ線は途中駅で方向転換する線路です。"},{id:54,category:"jikoku",difficulty:"mania",question:"JR西日本の「おおさか東線」全線開業は何年？",options:["2015年","2018年","2019年","2021年"],answer:2,explanation:"2019年3月16日、新大阪〜久宝寺間が開業し、おおさか東線が全線開業しました。"}],h=[{min:0,name:"見習い駅員",icon:"🎫",color:"#94a3b8"},{min:500,name:"各駅停車マニア",icon:"🚃",color:"#60a5fa"},{min:1500,name:"快速マニア",icon:"🚄",color:"#34d399"},{min:3e3,name:"特急マニア",icon:"⭐",color:"#fbbf24"},{min:5e3,name:"新幹線マニア",icon:"💎",color:"#a78bfa"},{min:8e3,name:"鉄道博士",icon:"👑",color:"#f472b6"},{min:12e3,name:"伝説の車両基地長",icon:"🏆",color:"#ef4444"}],k=["車番暗記の鬼","ダイヤ表の達人","形式コレクター","終着駅ハンター","架線電圧マスター","併結運転のプロ","駅ナンバリング博士","トンネル探検家"],b="densha-mania-quiz",t={screen:"home",category:null,difficulty:null,questions:[],currentIndex:0,score:0,streak:0,maxStreak:0,correct:0,wrong:0,timeLeft:30,timerId:null,answered:!1,selectedOption:null,stats:E()};function E(){try{const e=localStorage.getItem(b);if(e)return JSON.parse(e)}catch{}return{totalScore:0,gamesPlayed:0,bestStreak:0,totalCorrect:0,totalQuestions:0,categoryScores:{}}}function L(){localStorage.setItem(b,JSON.stringify(t.stats))}function q(e){let n=h[0];for(const a of h)e>=a.min&&(n=a);return n}function I(e){const n=[...e];for(let a=n.length-1;a>0;a--){const i=Math.floor(Math.random()*(a+1));[n[a],n[i]]=[n[i],n[a]]}return n}function j(e,n){let a=m;return e&&(a=a.filter(i=>i.category===e)),n&&(a=a.filter(i=>i.difficulty===n)),I(a).slice(0,10)}function x(e,n){t.category=e,t.difficulty=n,t.questions=j(e,n),t.currentIndex=0,t.score=0,t.streak=0,t.maxStreak=0,t.correct=0,t.wrong=0,t.answered=!1,t.selectedOption=null,t.screen="quiz",r(),w(),l()}function r(){t.timerId&&(clearInterval(t.timerId),t.timerId=null)}function w(){t.timeLeft=30,t.timerId=setInterval(()=>{t.timeLeft--,$(),t.timeLeft<=0&&J()},1e3)}function $(){const e=document.querySelector(".timer-bar-fill"),n=document.querySelector(".timer-text");e&&(e.style.width=`${t.timeLeft/30*100}%`),n&&(n.textContent=t.timeLeft),e&&e.classList.toggle("urgent",t.timeLeft<=10)}function J(){t.answered||(t.answered=!0,t.streak=0,t.wrong++,r(),l())}function R(e){if(t.answered)return;t.answered=!0,t.selectedOption=e,r();const n=t.questions[t.currentIndex],a=e===n.answer,i=y[t.difficulty||n.difficulty],s=a?100:0;if(a){t.correct++,t.streak++,t.streak>t.maxStreak&&(t.maxStreak=t.streak);const o=Math.floor(t.timeLeft*3),c=Math.min(t.streak-1,5)*20,g=Math.floor(s*(i.multiplier-1));t.score+=s+o+c+g}else t.wrong++,t.streak=0;l()}function T(){if(t.currentIndex++,t.answered=!1,t.selectedOption=null,t.currentIndex>=t.questions.length){A();return}r(),w(),l()}function A(){r(),t.screen="result",t.stats.totalScore+=t.score,t.stats.gamesPlayed++,t.stats.totalCorrect+=t.correct,t.stats.totalQuestions+=t.questions.length,t.maxStreak>t.stats.bestStreak&&(t.stats.bestStreak=t.maxStreak);const e=t.category||"all";t.stats.categoryScores[e]=(t.stats.categoryScores[e]||0)+t.score,L(),l()}function S(){r(),t.screen="home",l()}function M(){const e=q(t.stats.totalScore),n=t.stats.totalQuestions>0?Math.round(t.stats.totalCorrect/t.stats.totalQuestions*100):0,a=k[t.stats.gamesPlayed%k.length];return`
    <div class="screen home-screen">
      <header class="hero">
        <div class="hero-bg"></div>
        <div class="hero-content">
          <div class="logo-badge">🚄</div>
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
          <span class="stat-value">${m.length}</span>
          <span class="stat-label">問題数</span>
        </div>
      </section>

      <section class="section">
        <h2 class="section-title">難易度を選択</h2>
        <div class="difficulty-grid">
          ${Object.values(y).map(i=>`
            <button class="difficulty-card" data-difficulty="${i.id}">
              <span class="diff-name">${i.name}</span>
              <span class="diff-desc">${i.desc}</span>
              <span class="diff-mult">×${i.multiplier} ボーナス</span>
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
            <span class="cat-count">${m.length}問</span>
          </button>
          ${Object.values(v).map(i=>{const s=m.filter(o=>o.category===i.id).length;return`
              <button class="category-card" data-category="${i.id}" style="--cat-color: ${i.color}">
                <span class="cat-icon">${i.icon}</span>
                <span class="cat-name">${i.name}</span>
                <span class="cat-count">${s}問</span>
              </button>
            `}).join("")}
        </div>
      </section>

      <section class="section mania-section">
        <div class="mania-quote">
          <p>「${a}」の称号を持つあなたへ</p>
          <p class="quote-text">車両形式も路線も、全部知ってるつもり？ 本当に？</p>
        </div>
      </section>
    </div>
  `}function O(){const e=t.questions[t.currentIndex],n=v[e.category],a=y[e.difficulty],i=(t.currentIndex+1)/t.questions.length*100;let s=e.options.map((g,d)=>{let u="option-btn";return t.answered&&(d===e.answer?u+=" correct":d===t.selectedOption?u+=" wrong":u+=" dimmed"),`
        <button class="${u}" data-option="${d}" ${t.answered?"disabled":""}>
          <span class="option-letter">${String.fromCharCode(65+d)}</span>
          <span class="option-text">${g}</span>
        </button>
      `}).join("");const o=t.streak>=2?`<div class="streak-badge">🔥 ${t.streak}連続正解！</div>`:"",c=t.answered?`
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
          <span class="meta-diff">${a.name}</span>
        </div>
        <div class="quiz-score">${t.score.toLocaleString()} pt</div>
      </div>

      <div class="progress-bar">
        <div class="progress-fill" style="width: ${i}%"></div>
      </div>
      <div class="progress-text">${t.currentIndex+1} / ${t.questions.length}</div>

      <div class="timer-container">
        <div class="timer-bar">
          <div class="timer-bar-fill"></div>
        </div>
        <span class="timer-text">30</span>
      </div>

      ${o}

      <div class="question-card">
        <h2 class="question-text">${e.question}</h2>
        <div class="options-grid">${s}</div>
        ${c}
      </div>
    </div>
  `}function V(){const e=Math.round(t.correct/t.questions.length*100),n=q(t.stats.totalScore);let a,i,s;e>=90?(a="鉄道博士級",i="👑",s="#fbbf24"):e>=70?(a="特急マニア",i="⭐",s="#a78bfa"):e>=50?(a="快速マニア",i="🚃",s="#60a5fa"):(a="各駅停車マニア",i="🎫",s="#94a3b8");const o=t.category?v[t.category].name:"全ジャンル",c=y[t.difficulty].name;return`
    <div class="screen result-screen">
      <div class="result-card">
        <div class="result-grade" style="--grade-color: ${s}">
          <span class="grade-icon">${i}</span>
          <h2>${a}</h2>
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
          <span>${o}</span>
          <span>•</span>
          <span>${c}</span>
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
  `}let f="beginner",p="";function l(){const e=document.getElementById("app");switch(t.screen){case"home":e.innerHTML=M(),C();break;case"quiz":e.innerHTML=O(),P(),$();break;case"result":e.innerHTML=V(),U();break}}function C(){document.querySelectorAll(".difficulty-card").forEach(e=>{e.classList.toggle("selected",e.dataset.difficulty===f),e.addEventListener("click",()=>{f=e.dataset.difficulty,document.querySelectorAll(".difficulty-card").forEach(n=>n.classList.toggle("selected",n.dataset.difficulty===f))})}),document.querySelectorAll(".category-card").forEach(e=>{e.classList.toggle("selected",e.dataset.category===p),e.addEventListener("click",()=>{p=e.dataset.category,document.querySelectorAll(".category-card").forEach(n=>n.classList.toggle("selected",n.dataset.category===p)),x(p||null,f)})})}function P(){document.querySelectorAll(".option-btn:not([disabled])").forEach(a=>{a.addEventListener("click",()=>R(Number(a.dataset.option)))});const e=document.getElementById("btn-next");e&&e.addEventListener("click",T);const n=document.getElementById("btn-quit");n&&n.addEventListener("click",()=>{confirm("クイズを中断しますか？スコアは保存されません。")&&(r(),S())})}function U(){var e,n;(e=document.getElementById("btn-retry"))==null||e.addEventListener("click",()=>{x(t.category,t.difficulty)}),(n=document.getElementById("btn-home"))==null||n.addEventListener("click",S)}l();
