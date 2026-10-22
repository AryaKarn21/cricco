import SiteHeader from "@/components/SiteHeader";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export const dynamic = "force-dynamic";
export default async function Home() {
  let articles: {id:string;title:string;excerpt:string|null;category:string;slug:string}[] = [];
  let tournaments: {id:string;name:string;description:string|null;location:string|null;status:string}[] = [];
  let matches: {id:string;status:string;homeScore:string|null;awayScore:string|null;venue:string|null;startsAt:Date;homeTeam:{name:string};awayTeam:{name:string};resultText:string|null;overs:string|null}[] = [];
  let dbReady = true;
  try {
    [articles,tournaments,matches] = await Promise.all([
      prisma.article.findMany({where:{status:"PUBLISHED"},orderBy:{publishedAt:"desc"},take:3,select:{id:true,title:true,excerpt:true,category:true,slug:true}}),
      prisma.tournament.findMany({orderBy:{createdAt:"desc"},take:3,select:{id:true,name:true,description:true,location:true,status:true}}),
      prisma.match.findMany({orderBy:{startsAt:"desc"},take:3,include:{homeTeam:{select:{name:true}},awayTeam:{select:{name:true}}}})
    ]);
  } catch { dbReady = false; }
  return <><SiteHeader/>
    {!dbReady&&<div className="banner">Database is not connected yet. Follow README setup steps. Content below is clearly labeled as sample content.</div>}
    <div className="banner">CRIICO platform preview · Only published and verified content should appear here.</div>
    <main>
      <section className="hero"><div className="container"><div className="eyebrow">Nepal&apos;s cricket community</div><h1>The future of cricket starts here.</h1><p>Connecting Nepal&apos;s cricket community through live action, emerging talent, unforgettable stories, and innovative sports technology.</p><a className="btn btn-red" href="#scores">Explore Cricket</a> <a className="btn btn-outline" href="#tournaments">Discover Tournaments</a></div></section>
      <section id="scores"><div className="container"><div className="section-head"><h2>Match Centre</h2><span className="muted">Database-connected fixtures</span></div>
        {matches.length ? <div className="grid">{matches.map(m=><article className="card score" key={m.id}><div className="card-body"><span className="tag">{m.status}</span><div className="scoreline"><span>{m.homeTeam.name}</span><strong>{m.homeScore??"—"}</strong></div><div className="scoreline"><span>{m.awayTeam.name}</span><strong>{m.awayScore??"—"}</strong></div><p className="muted">{m.venue??"Venue TBC"} · {m.startsAt.toLocaleDateString()}</p>{m.resultText&&<p>{m.resultText}</p>}</div></article>)}</div>:<div className="card card-body"><h3>No verified matches published yet</h3><p className="muted">Add fixtures through the database/admin workflow. We do not display invented live scores.</p></div>}
      </div></section>
      <section className="dark-section" id="tournaments"><div className="container"><div className="section-head"><h2>Featured Tournaments</h2></div>{tournaments.length?<div className="grid">{tournaments.map(t=><article className="card" key={t.id}><div className="art">🏏</div><div className="card-body"><span className="tag">{t.status}</span><h3 style={{fontSize:24,margin:"12px 0"}}>{t.name}</h3><p className="muted">{t.location??"Location to be announced"}</p><p>{t.description}</p></div></article>)}</div>:<div className="card card-body"><h3>Tournament listings will appear here</h3><p className="muted">Create tournament records when the database is ready.</p></div>}</div></section>
      <section id="news"><div className="container"><div className="section-head"><h2>Latest Cricket Stories</h2></div>{articles.length?<div className="grid">{articles.map(a=><article className="card" key={a.id}><div className="art">CRIICO</div><div className="card-body"><span className="tag">{a.category}</span><h3 style={{fontSize:24,margin:"12px 0"}}>{a.title}</h3><p className="muted">{a.excerpt}</p><Link href={`/news/${a.slug}`}><b>Read story →</b></Link></div></article>)}</div>:<div className="card card-body"><h3>Stories from Nepal&apos;s cricket community</h3><p className="muted">Published articles will appear here after editors add verified content.</p></div>}</div></section>
      <section className="dark-section" id="players"><div className="container"><div className="section-head"><h2>Discover Players</h2></div><p>Celebrate emerging talent and established players from Nepal&apos;s cricket community.</p><p className="muted">Player profiles will be shown after verified profiles are added to the database.</p></div></section>
      <section id="community"><div className="container community"><div><div className="eyebrow">Grassroots cricket</div><h2 style={{fontSize:44,fontWeight:950}}>Every cricket dream deserves a chance.</h2><p>CRIICO connects local matches, clubs, schools, young players, and regional tournaments with the people who care about them.</p><ul><li>Local match coverage</li><li>Talent discovery</li><li>School and college cricket</li><li>Community stories</li></ul></div><div className="card"><div className="art" style={{minHeight:250}}>CRIICO</div><div className="card-body"><h3>Grow the game together</h3><p className="muted">Community submissions and registration can be enabled as the next feature.</p><Link className="btn btn-blue" href="/contact">Contact CRIICO</Link></div></div></div></section>
      <section id="matches"><div className="container"><div className="section-head"><h2>Upcoming Events</h2></div><p className="muted">Verified events will appear here once event publishing is enabled.</p></div></section>
      <section><div className="container"><div className="newsletter"><h2 style={{fontSize:38,fontWeight:950}}>Stay ahead of every ball.</h2><p>Get cricket news, tournament updates, and community highlights.</p><p className="muted">Newsletter subscriptions will be activated after the subscription endpoint and email provider are configured.</p><Link className="btn btn-red" href="/contact">Get in touch</Link></div></div></section>
      <section><div className="container"><div className="section-head"><h2>About CRIICO</h2></div><p>CRIICO is building a digital home for Nepal&apos;s cricket community, connecting grassroots cricket, media, tournaments, players, and sports technology.</p></div></section>
    </main>
    <footer className="footer"><div className="container footer-grid"><div><Link className="brand" href="/"><span/>CRIICO</Link><p>Connecting Cricket. Empowering Communities. Inspiring the Next Generation.</p></div><div><b>Explore</b><p><a href="#scores">Match Centre</a><br/><a href="#tournaments">Tournaments</a><br/><a href="#news">News</a></p></div><div><b>Contact</b><p><Link href="/contact">Contact CRIICO</Link><br/><Link href="/login">Admin login</Link></p></div></div><div className="container muted" style={{marginTop:24}}>© {new Date().getFullYear()} CRIICO. All rights reserved.</div></footer>
  </>;
}

