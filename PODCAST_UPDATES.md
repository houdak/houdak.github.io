# How to Add a New Podcast Episode to the Website

The homepage pulls episode data from one file: `src/data/podcast.json`.
Once you edit and push that file, the site redeploys automatically via GitHub Actions.

---

## Steps

### 1. Open the data file

```
src/data/podcast.json
```

### 2. Add a new entry at the TOP of the `episodes` array

Copy this template and fill in your episode's details:

```json
{
  "title": "Episode 3: Your Episode Title",
  "link": "https://frivolousscience.substack.com/p/your-episode-slug",
  "date": "Mon, 16 Jun 2026 12:00:00 GMT",
  "desc": "A one-sentence teaser for the episode."
},
```

**Fields:**
- `title` — Episode title exactly as you want it displayed
- `link` — The Substack URL for the episode
- `date` — Publication date in this format: `Day, DD Mon YYYY HH:MM:SS GMT`
  (you can find this in your Substack post URL or RSS feed)
- `desc` — Short subtitle or teaser shown under the title (keep it to one line)

### 3. Save the file

Make sure the JSON stays valid — each entry except the last should end with a comma `,`.

### 4. Commit and push to GitHub

```bash
git add src/data/podcast.json
git commit -m "Add episode 3"
git push
```

GitHub Actions will automatically build and deploy the site within ~2 minutes.

---

## What the file should look like after adding an episode

```json
{
  "cover": "...",
  "description": "...",
  "episodes": [
    {
      "title": "Episode 3: Your New Episode",
      "link": "https://frivolousscience.substack.com/p/episode-3-slug",
      "date": "Mon, 16 Jun 2026 12:00:00 GMT",
      "desc": "Your teaser here."
    },
    {
      "title": "BONUS EPISODE: Fly Propaganda",
      ...existing episodes below...
    }
  ]
}
```

---

## To update the cover image or description

Edit the `cover` and `description` fields at the top of `src/data/podcast.json`, then commit and push.
