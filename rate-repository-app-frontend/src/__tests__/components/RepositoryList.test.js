import { render, screen } from '@testing-library/react-native';
import { RepositoryListContainer } from '../../components/RepositoryList';
import { numberModificator } from '../../components/RepositoryItem';


describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
      it('renders repository information correctly', () => {
        const repositories = {
          totalCount: 8,
          pageInfo: {
            hasNextPage: true,
            endCursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          edges: [
            {
              node: {
                id: 'jaredpalmer.formik',
                fullName: 'jaredpalmer/formik',
                description: 'Build forms in React, without the tears',
                language: 'TypeScript',
                forksCount: 1619,
                stargazersCount: 21856,
                ratingAverage: 88,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars2.githubusercontent.com/u/4060187?v=4',
              },
              cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
            },
            {
              node: {
                id: 'async-library.react-async',
                fullName: 'async-library/react-async',
                description: 'Flexible promise-based React data loader',
                language: 'JavaScript',
                forksCount: 69,
                stargazersCount: 1760,
                ratingAverage: 72,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars1.githubusercontent.com/u/54310907?v=4',
              },
              cursor:
                'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            },
          ],
        };
        
        const { getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);
        const names = getAllByTestId('name')
        const descriptions = getAllByTestId('description')
        const languages = getAllByTestId('language')
        const forks = getAllByTestId('forks')
        const stars = getAllByTestId('stars')
        const ratings = getAllByTestId('rating')
        const reviews = getAllByTestId('reviews')


        repositories.edges.forEach((edge,i) => {
          console.log('names', names[i])
          console.log('descriptions', descriptions[i])
          console.log('languages', languages[i])
          console.log('forks', forks[i])
          console.log('stars', stars[i])
          console.log('ratings', ratings[i])
          console.log('reviews', reviews[i])
          
          expect(names[i]).toHaveTextContent(edge.node.fullName);
          expect(descriptions[i]).toHaveTextContent(edge.node.description);
          expect(languages[i]).toHaveTextContent(edge.node.language);
          expect(forks[i]).toHaveTextContent(numberModificator(edge.node.forksCount));
          expect(stars[i]).toHaveTextContent(numberModificator(edge.node.stargazersCount));
          expect(ratings[i]).toHaveTextContent(numberModificator(edge.node.ratingAverage));
          expect(reviews[i]).toHaveTextContent(numberModificator(edge.node.reviewCount));
        });
      });
    });
  });