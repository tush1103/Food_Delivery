import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <p><Link href="/meals">Meals</Link></p>
      <p><Link href="/meals/share">ShareMealPage</Link></p>
      <p><Link href="/community">CommunityPage</Link></p>
      <p><Link href="/meals/meal1">Meal1</Link></p>
      <p><Link href="/meals/meal2">Meal2</Link></p>
    </main>
  );
}
