const getRepos = require('./ex004');

describe('Test if getRepos contain projects', () => {
  const url = 'https://api.github.com/orgs/tryber/repos';

  it('Test todo-list and meme-generator', async () => {
    expect.assertions(2);
    expect(await getRepos(url)).toContain('sd-01-week4-5-project-todo-list');
    expect(await getRepos(url)).toContain('sd-01-week4-5-project-meme-generator');
  });
});