import React, { useState } from 'react';
import '../styles/GitHubRepos.css';

const GitHubRepos = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const githubAccounts = [
    { name: 'Dev-moe-kyawaung', url: 'https://github.com/Dev-moe-kyawaung', repos: 15, main: true },
    { name: 'moekyawaung-china', url: 'https://moekyawaung-china.github.io/', repos: 8 },
    { name: 'moekyawaung-developer', url: 'https://moekyawaung-developer.github.io/', repos: 12 },
    { name: 'moekyawaungvivov30pro-design', url: 'https://moekyawaungvivov30pro-design.github.io/', repos: 6 },
    { name: 'moekyaw-aung-mm', url: 'https://moekyaw-aung-mm.github.io/', repos: 9 },
    { name: 'moekyawaung-mk', url: 'https://moekyawaung-mk.github.io/', repos: 7 },
    { name: 'moekyawaung-microsoft', url: 'https://moekyawaung-microsoft.github.io/', repos: 11 },
    { name: 'moekyawaung-cyber', url: 'https://moekyawaung-cyber.github.io/', repos: 10 },
    { name: 'moekyawaung-bangkok', url: 'https://moekyawaung-bangkok.github.io/', repos: 5 },
    { name: 'moekyawaung-micro', url: 'https://moekyawaung-micro.github.io/', repos: 8 },
    { name: 'moekyawaungmka2032-boop', url: 'https://moekyawaungmka2032-boop.github.io/', repos: 13 },
    { name: 'moekyawaung-dev-mm', url: 'https://moekyawaung-dev-mm.github.io/', repos: 7 },
    { name: 'moekyaw-developer', url: 'https://moekyaw-developer.github.io/', repos: 9 },
    { name: 'moekyawaung', url: 'https://moekyawaung.github.io/', repos: 14 },
    { name: 'Moekyawaung-mm', url: 'https://Moekyawaung-mm.github.io/', repos: 6 },
    { name: 'moekyawaung-tech', url: 'https://moekyawaung-tech.github.io/', repos: 11 },
    { name: 'moekyawaung-hack', url: 'https://moekyawaung-hack.github.io/', repos: 8 },
    { name: 'moekyawaung-graduate', url: 'https://moekyawaung-graduate.github.io/', repos: 5 },
    { name: 'Moekyawaung-Linux', url: 'https://Moekyawaung-Linux.github.io/', repos: 7 },
    { name: 'Moekyawaung-coder', url: 'https://Moekyawaung-coder.github.io/', repos: 10 }
  ];

  const filteredAccounts = searchTerm
    ? githubAccounts.filter(acc => acc.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : githubAccounts;

  const totalRepos = githubAccounts.reduce((sum, acc) => sum + acc.repos, 0);

  return (
    <div className="github-page">
      <section className="github-hero">
        <div className="container">
          <h1 className="page-title">
            <span className="bracket">{'<'}</span>
            GitHub Accounts
            <span className="bracket">{'/>'}</span>
          </h1>
          <p className="page-subtitle">
            {githubAccounts.length} GitHub accounts · {totalRepos}+ repositories
          </p>
        </div>
      </section>

      <section className="github-search section-compact">
        <div className="container">
          <div className="search-box">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search accounts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="github-grid section">
        <div className="container">
          <div className="accounts-grid">
            {filteredAccounts.map((account, index) => (
              <a
                key={index}
                href={account.url}
                target="_blank"
                rel="noopener noreferrer"
                className="account-card"
              >
                {account.main && <div className="main-badge">Primary</div>}
                <div className="account-icon">
                  <i className="fab fa-github"></i>
                </div>
                <h3>{account.name}</h3>
                <p className="repo-count">
                  <i className="fas fa-code-branch"></i>
                  {account.repos} repositories
                </p>
                <div className="visit-link">
                  Visit Profile <i className="fas fa-arrow-right"></i>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GitHubRepos;

