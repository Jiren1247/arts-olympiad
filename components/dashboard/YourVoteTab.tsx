import { DashboardLoadingStates, DashboardAuthenticationStates } from "../../mock/DashboardTypes";
import { VotedArtDisplay } from "./VotedArtDisplay";
import { useDashboardContext } from "./DashboardContext";
import Link from "next/link";

interface YourVoteTabProps {
  dashboardLoadingState: DashboardLoadingStates;
  isAuthenticated: DashboardAuthenticationStates;
}

export const YourVoteTab: React.FC<YourVoteTabProps> = ({ dashboardLoadingState, isAuthenticated }) => {

  const { apiUserData } = useDashboardContext();

  return (
    <div>
      {isAuthenticated == "Unauthenticated" &&
          <>
            <div>You're not logged in!</div>
            <Link href="/auth/login">Return to login page</Link>
          </>
      }
      {isAuthenticated == "Authenticated" && dashboardLoadingState == "Loading" && 
      <div>
        Loading the Your Vote page...
      </div>
      }
      {dashboardLoadingState == "Loaded" && isAuthenticated == "Authenticated" && 
      <div>
        <p className="font-montserrat text-2xl font-regular text-[32px] my-3 mb-8"> Your Vote </p>
        {apiUserData && !apiUserData.voted_id ?
          <VotedArtDisplay/>
          :
          <div className="my-10">
            <p>Your voted-upon artwork will appear here.</p>
            <p>Visit the <Link href="/gallery" className="text-blue-500 visited:text-purple-600"> Gallery page </Link> to vote for your favorite artwork!</p>
          </div>
        }
      </div>
      }
    </div>
  );
};