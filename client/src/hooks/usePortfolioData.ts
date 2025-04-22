import { useQuery } from '@tanstack/react-query';

const API_BASE_URL = 'http://dnh.io.vn:3000/api/portfolio';

export const usePortfolioData = () => {
  const userInfoQuery = useQuery({
    queryKey: ['userInfo'],
    queryFn: async () => {
      const response = await fetch(`${API_BASE_URL}/user-info`);
      if (!response.ok) throw new Error('Failed to fetch user info');
      return response.json();
    }
  });

  const skillsQuery = useQuery({
    queryKey: ['skills'],
    queryFn: async () => {
      const response = await fetch(`${API_BASE_URL}/skills`);
      if (!response.ok) throw new Error('Failed to fetch skills');
      return response.json();
    }
  });

  const projectsQuery = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const response = await fetch(`${API_BASE_URL}/projects`);
      if (!response.ok) throw new Error('Failed to fetch projects');
      return response.json();
    }
  });

  const achievementsQuery = useQuery({
    queryKey: ['achievements'],
    queryFn: async () => {
      const response = await fetch(`${API_BASE_URL}/achievements`);
      if (!response.ok) throw new Error('Failed to fetch achievements');
      return response.json();
    }
  });

  const experiencesQuery = useQuery({
    queryKey: ['experiences'],
    queryFn: async () => {
      const response = await fetch(`${API_BASE_URL}/experiences`);
      if (!response.ok) throw new Error('Failed to fetch experiences');
      return response.json();
    }
  });

  return {
    userInfo: userInfoQuery.data,
    skills: skillsQuery.data,
    projects: projectsQuery.data,
    achievements: achievementsQuery.data,
    experiences: experiencesQuery.data,
    isLoading: userInfoQuery.isLoading || skillsQuery.isLoading || 
               projectsQuery.isLoading || achievementsQuery.isLoading || 
               experiencesQuery.isLoading,
    error: userInfoQuery.error || skillsQuery.error || 
           projectsQuery.error || achievementsQuery.error || 
           experiencesQuery.error
  };
}; 