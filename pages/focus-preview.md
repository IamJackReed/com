<style>
  .focus {
    max-width: 1120px;
    margin: 5rem auto 4rem;
    padding: 0 1.5rem;
  }

  .focus-kicker {
    text-transform: uppercase;
    letter-spacing: 0.16em;
    font-size: 0.75rem;
    font-weight: 600;
    color: #777;
    text-align: center;
    margin-bottom: 0.5rem;
  }

  .focus-heading {
    text-align: center;
    font-size: 2.25rem;
    line-height: 1.2;
    margin: 0 0 0.75rem;
  }

  .focus-subtitle {
    text-align: center;
    color: #555;
    max-width: 640px;
    margin: 0 auto 3rem;
  }

  .focus-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.5rem;
  }

  .focus-card {
    border: 1px solid #e2e2e2;
    border-radius: 12px;
    padding: 1.5rem 1.5rem 1.25rem;
    background: #fff;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    transition: box-shadow 0.18s ease-out, transform 0.18s ease-out,
      border-color 0.18s ease-out;
  }

  .focus-eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.14em;
    font-size: 0.7rem;
    color: #888;
    margin: 0;
  }

  .focus-title {
    font-size: 1.1rem;
    margin: 0;
  }

  .focus-text {
    font-size: 0.9rem;
    color: #555;
    margin: 0 0 0.75rem;
  }

  .focus-link {
    margin-top: auto;
    font-size: 0.9rem;
    text-decoration: none;
    color: #111;
    font-weight: 500;
  }

  .focus-link span {
    display: inline-block;
    transform: translateY(1px);
  }

  .focus-card:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
    border-color: #111;
  }

  @media (max-width: 1024px) {
    .focus-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 640px) {
    .focus {
      margin-top: 3.5rem;
    }
    .focus-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
