import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';


export default function RecipeReviewCard(props) {
  const {student} = props;
  const [student, setStudent] = useState<any>(null);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          (student) && <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {student.name[0]}
          </Avatar>
        }
        title={student.name}
        subheader="Student"
      />
      
    </Card>
  );
}