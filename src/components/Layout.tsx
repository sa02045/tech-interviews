interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <main className="mx-auto sm:container">{children}</main>
    </div>
  );
}
