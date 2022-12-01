import Button from '../../components/button';

export default function Home() {
  return (
    <div>
      <Button type="submit" variant="search">
        Search
      </Button>
      <Button type="submit" variant="delete" />
    </div>
  );
}
