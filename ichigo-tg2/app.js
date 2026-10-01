const questions=[
{cat:'Kosakata',q:'「駅」 adalah ...',a:['えき — stasiun','いえ — rumah','えん — taman','あき — musim gugur'],c:0,e:'駅（えき） berarti stasiun.'},
{cat:'Kosakata',q:'「病院」 dibaca ...',a:['びよういん','びょういん','びょいん','びょうえん'],c:1,e:'病院 dibaca びょういん (byouin), artinya rumah sakit.'},
{cat:'Kosakata',q:'「朝」 berarti ...',a:['malam','siang','pagi','sore'],c:2,e:'朝（あさ） berarti pagi.'},
{cat:'Kosakata',q:'「食べます」 berarti ...',a:['minum','makan','membeli','memasak'],c:1,e:'食べます（たべます） berarti makan.'},
{cat:'Kosakata',q:'「休み」 paling tepat berarti ...',a:['libur/istirahat','pekerjaan','jadwal','pertemuan'],c:0,e:'休み（やすみ） berarti libur atau istirahat.'},
{cat:'Kosakata',q:'「明日」 dibaca ...',a:['きょう','あした','きのう','あさ'],c:1,e:'明日（あした） berarti besok.'},
{cat:'Kosakata',q:'「電車」 adalah ...',a:['bus','pesawat','kereta listrik','sepeda'],c:2,e:'電車（でんしゃ） berarti kereta listrik.'},
{cat:'Kosakata',q:'「右」 berarti ...',a:['kiri','kanan','atas','bawah'],c:1,e:'右（みぎ） berarti kanan.'},
{cat:'Kosakata',q:'「大きい」 berarti ...',a:['kecil','panjang','besar','baru'],c:2,e:'大きい（おおきい） berarti besar.'},
{cat:'Kosakata',q:'「写真を撮ります」 berarti ...',a:['mencetak foto','mengambil foto','melihat foto','mengirim foto'],c:1,e:'写真を撮ります berarti mengambil foto.'},
{cat:'Kanji',q:'「飲みます」 cara baca yang benar adalah ...',a:['のみます','たべます','よみます','みます'],c:0,e:'飲みます dibaca のみます, artinya minum.'},
{cat:'Kanji',q:'「休みます」 dibaca ...',a:['やすみます','はすみます','やすいます','やせみます'],c:0,e:'休みます dibaca やすみます.'},
{cat:'Kanji',q:'「月曜日」 berarti ...',a:['Senin','Selasa','Rabu','Minggu'],c:0,e:'月曜日（げつようび） adalah hari Senin.'},
{cat:'Kanji',q:'「会社」 dibaca ...',a:['がいしゃ','かいしゃ','かいじゃ','かしゃ'],c:1,e:'会社（かいしゃ） berarti perusahaan.'},
{cat:'Kanji',q:'「入口」 berarti ...',a:['pintu keluar','jalan masuk','jendela','lantai'],c:1,e:'入口（いりぐち） berarti pintu/jalan masuk.'},
{cat:'Kanji',q:'「出口」 dibaca ...',a:['でぐち','いりぐち','でくち','てぐち'],c:0,e:'出口（でぐち） berarti pintu keluar.'},
{cat:'Kanji',q:'「時間」 berarti ...',a:['tanggal','waktu','tempat','orang'],c:1,e:'時間（じかん） berarti waktu.'},
{cat:'Kanji',q:'「名前」 dibaca ...',a:['なまえ','なめえ','なまい','なあえ'],c:0,e:'名前（なまえ） berarti nama.'},
{cat:'Grammar',q:'わたしは 毎日 7時＿＿起きます。',a:['を','に','で','へ'],c:1,e:'に digunakan untuk menunjukkan waktu tertentu: 7時に起きます.'},
{cat:'Grammar',q:'スーパー＿＿パンを買いました。',a:['に','を','で','と'],c:2,e:'で menunjukkan tempat berlangsungnya aktivitas membeli.'},
{cat:'Grammar',q:'きのう 友だち＿＿映画を見ました。',a:['が','と','を','へ'],c:1,e:'と berarti bersama/dengan seseorang.'},
{cat:'Grammar',q:'この料理は おいしく＿＿です。',a:['ない','じゃない','ありません','ありませんでした'],c:2,e:'Untuk menyangkal kata sifat い: おいしくありません.'},
{cat:'Grammar',q:'日本語を もっと＿＿なりたいです。',a:['上手に','上手で','上手な','上手だ'],c:0,e:'上手になる menjadi 上手になりたい: ingin menjadi lebih mahir.'},
{cat:'Grammar',q:'ここで 写真を＿＿もいいですか。',a:['撮って','撮り','撮る','撮った'],c:0,e:'撮ってもいいですか berarti bolehkah mengambil foto?'},
{cat:'Grammar',q:'今日は 雨が＿＿、出かけません。',a:['降るから','降ったから','降ってから','降りから'],c:0,e:'降るから menyatakan alasan: karena hujan turun.'},
{cat:'Grammar',q:'駅まで バス＿＿行きます。',a:['に','を','で','が'],c:2,e:'で digunakan untuk alat transportasi: busで行きます.'},
{cat:'Grammar',q:'この薬を 飲ん＿＿ください。',a:['で','て','だ','た'],c:1,e:'Pola permintaan: Vてください.'},
{cat:'Grammar',q:'宿題を して＿＿、テレビを見ます。',a:['から','まで','だけ','しか'],c:0,e:'Vてから berarti setelah melakukan sesuatu.'},
{cat:'Conversation',q:'A: お名前は？ B: ＿＿です。',a:['三時','田中','会社','日本'],c:1,e:'Pertanyaan お名前は meminta nama, sehingga 田中 adalah jawaban yang tepat.'},
{cat:'Conversation',q:'A: すみません、駅はどこですか。 B: ＿＿。',a:['ありがとうございます','あちらです','いただきます','おやすみなさい'],c:1,e:'あちらです berarti di sebelah sana, cocok untuk menunjukkan lokasi.'},
{cat:'Conversation',q:'A: コーヒーを飲みますか。 B: いいえ、＿＿。',a:['飲みます','飲みません','飲みましたか','飲みたいですか'],c:1,e:'いいえ diikuti bentuk negatif: 飲みません.'},
{cat:'Conversation',q:'A: いっしょに昼ごはんを食べませんか。 B: ＿＿。',a:['はい、食べましょう','いいえ、食べました','はい、食べません','どういたしまして'],c:0,e:'Ajakan 食べませんか dijawab 食べましょう untuk menerima ajakan.'},
{cat:'Conversation',q:'A: 今日は何曜日ですか。 B: ＿＿です。',a:['三時','六月','金曜日','午前'],c:2,e:'何曜日 menanyakan hari, sehingga 金曜日 (Jumat) tepat.'},
{cat:'Conversation',q:'A: いくらですか。 B: ＿＿円です。',a:['三人','三時','三千','三日'],c:2,e:'いくら menanyakan harga; 三千円 berarti 3.000 yen.'},
{cat:'Conversation',q:'A: どうしましたか。 B: ちょっと ＿＿。',a:['元気です','頭が痛いです','学生です','便利です'],c:1,e:'どうしましたか menanyakan kondisi/masalah; 頭が痛いです berarti kepala saya sakit.'},
{cat:'Conversation',q:'A: 明日、何時に会いますか。 B: ＿＿。',a:['駅で会います','10時に会いましょう','日本人です','はい、昨日です'],c:1,e:'Pertanyaan menanyakan jam; jawaban 10時に会いましょう sesuai.'},
{cat:'Conversation',q:'A: この部屋に入ってもいいですか。 B: ＿＿。',a:['はい、どうぞ','いいえ、入りました','はい、入りません','お元気ですか'],c:0,e:'どうぞ digunakan untuk mengizinkan seseorang masuk.'},
{cat:'Conversation',q:'A: 手伝いましょうか。 B: ＿＿。',a:['はい、お願いします','いいえ、昨日です','はい、学生です','どうぞお大事に'],c:0,e:'お願いします adalah respons alami saat menerima tawaran bantuan.'},
{cat:'Reading',q:'【お知らせ】月曜日は休みです。火曜日から営業します。いつ店が開きますか。',a:['Senin','Selasa','Minggu','Setiap hari'],c:1,e:'Toko libur Senin dan buka mulai Selasa.'},
{cat:'Reading',q:'【メモ】田中さんへ。会議は3時からです。2時50分に会議室へ来てください。何時に来ますか。',a:['2:30','2:50','3:00','3:10'],c:1,e:'Pesan meminta datang ke ruang rapat pukul 2:50.'},
{cat:'Reading',q:'「この薬は食後に飲んでください。」いつ薬を飲みますか。',a:['Sebelum makan','Saat tidur','Setelah makan','Sebelum pergi'],c:2,e:'食後 berarti setelah makan.'},
{cat:'Reading',q:'「駅の前にコンビニがあります。銀行はコンビニの右です。」Bank berada di mana?',a:['Di depan stasiun','Di kiri minimarket','Di kanan minimarket','Di belakang stasiun'],c:2,e:'右 berarti kanan, jadi bank berada di kanan minimarket.'},
{cat:'Reading',q:'「明日は雨です。傘を持っていってください。」Apa yang disarankan?',a:['Membawa payung','Membeli sepatu','Membawa makanan','Tidak keluar rumah'],c:0,e:'傘を持っていってください berarti harap membawa payung.'},
{cat:'Reading',q:'「この電車は東京へ行きます。次の駅で乗り換えてください。」Apa yang harus dilakukan?',a:['Turun di stasiun berikut dan pindah kereta','Tidur di kereta','Kembali ke rumah','Membeli tiket bus'],c:0,e:'乗り換える berarti berganti kendaraan/kereta.'},
{cat:'Reading',q:'「仕事は9時から5時までです。12時から1時間休みます。」Berapa lama waktu istirahat?',a:['30 menit','1 jam','2 jam','3 jam'],c:1,e:'1時間 berarti satu jam.'},
{cat:'Reading',q:'「山田さんは風邪です。今日は会社を休みます。」Mengapa Yamada tidak masuk kerja?',a:['Sedang liburan','Sedang bepergian','Sedang sakit flu','Sedang rapat'],c:2,e:'風邪 berarti flu/pilek.'},
{cat:'Reading',q:'「このシャツは1500円です。赤いシャツはありません。白いシャツがあります。」Berapa harga kemeja tersebut?',a:['500 yen','1.000 yen','1.500 yen','2.000 yen'],c:2,e:'Teks menyebutkan harga 1500円.'},
{cat:'Reading',q:'「入口はあちらです。出口は階段のとなりです。」Di mana pintu keluar?',a:['Di depan pintu masuk','Di sebelah tangga','Di dalam lift','Di depan toko'],c:1,e:'となり berarti di sebelah; 出口 berada di sebelah tangga.'}
];
let current=0, answers=Array(questions.length).fill(null), flagged=Array(questions.length).fill(false), remain=3600, timer=null, participant='';
function toggleDark(){document.body.classList.toggle('darkmode');localStorage.setItem('ichigoJftDark',document.body.classList.contains('darkmode'))}
if(localStorage.getItem('ichigoJftDark')==='true')document.body.classList.add('darkmode');
function startExam(){participant=prompt('Masukkan nama peserta:','Peserta Ichigo')||'Peserta';current=0;answers.fill(null);flagged.fill(false);remain=3600;clearInterval(timer);renderExam();timer=setInterval(()=>{remain--;if(remain<=0){clearInterval(timer);finishExam()}updateTimer()},1000)}
function updateTimer(){const t=document.getElementById('timer');if(!t)return;let m=Math.floor(remain/60),s=remain%60;t.textContent=String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');if(remain<=300)t.classList.add('danger')}
function renderExam(){document.getElementById('modal').classList.remove('hidden');const q=questions[current];const pct=Math.round((current+1)/questions.length*100);document.getElementById('modalContent').innerHTML=`<div class="exam-top"><div><b>ICHIGO JFT BASIC A2</b><small>${participant}</small></div><div id="timer" class="timer">60:00</div></div><div class="exam-progress"><i style="width:${pct}%"></i></div><div class="exam-layout"><aside><div class="side-title">Daftar soal</div><div class="numbers">${questions.map((_,i)=>`<button class="num ${i===current?'current':''} ${answers[i]!==null?'done':''} ${flagged[i]?'flag':''}" onclick="goQ(${i})">${i+1}</button>`).join('')}</div><button class="flagbtn" onclick="toggleFlag()">${flagged[current]?'★ Hapus ragu-ragu':'☆ Tandai ragu-ragu'}</button></aside><section class="question"><div class="qmeta">${q.cat.toUpperCase()} • SOAL ${current+1}/${questions.length}</div><h2>${q.q}</h2><div class="answer-grid">${q.a.map((x,i)=>`<button class="answer ${answers[current]===i?'selected':''}" onclick="choose(${i})"><span>${String.fromCharCode(65+i)}</span>${x}</button>`).join('')}</div><div class="navrow"><button class="navbtn" onclick="prevQ()" ${current===0?'disabled':''}>← Sebelumnya</button><button class="navbtn primary" onclick="${current===questions.length-1?'finishExam()':'nextQ()'}">${current===questions.length-1?'Selesai':'Berikutnya →'}</button></div></section></div>`;updateTimer()}
function choose(i){answers[current]=i;renderExam()}
function goQ(i){current=i;renderExam()}
function nextQ(){if(current<questions.length-1){current++;renderExam()}}
function prevQ(){if(current>0){current--;renderExam()}}
function toggleFlag(){flagged[current]=!flagged[current];renderExam()}
function finishExam(){clearInterval(timer);let score=answers.reduce((n,a,i)=>n+(a===questions[i].c?1:0),0);let pct=Math.round(score/questions.length*100);let history=JSON.parse(localStorage.getItem('ichigoJftHistory')||'[]');history.unshift({name:participant,date:new Date().toLocaleString('id-ID'),score,pct});localStorage.setItem('ichigoJftHistory',JSON.stringify(history.slice(0,10)));renderResult(score,pct)}
function renderResult(score,pct){let rank=pct>=80?'Sangat baik':pct>=60?'Cukup baik':'Perlu latihan lagi';document.getElementById('modalContent').innerHTML=`<div class="result"><div class="result-icon">🍓</div><small>HASIL SIMULASI</small><h1>${score} / ${questions.length}</h1><div class="result-pct">${pct}%</div><h3>${rank}</h3><p>${participant}, berikut ringkasan hasil latihanmu.</p><div class="result-stats"><span><b>${answers.filter((a,i)=>a===questions[i].c).length}</b>Benar</span><span><b>${answers.filter((a,i)=>a!==null&&a!==questions[i].c).length}</b>Salah</span><span><b>${answers.filter(a=>a===null).length}</b>Kosong</span></div><div class="review"><h3>Pembahasan</h3>${questions.map((q,i)=>`<div class="review-item ${answers[i]===q.c?'correct':'wrong'}"><b>${i+1}. ${q.q}</b><span>${answers[i]===q.c?'✓ Benar':'✕ Salah'} • Jawaban: ${String.fromCharCode(65+q.c)}</span><p>${q.e}</p></div>`).join('')}</div><button class="btn primary" onclick="closeModal()">Kembali ke Beranda</button></div>`}
function closeModal(){clearInterval(timer);document.getElementById('modal').classList.add('hidden')}
document.getElementById('modal').addEventListener('click',e=>{if(e.target.id==='modal')closeModal()});
