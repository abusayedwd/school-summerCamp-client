import { Helmet } from "react-helmet-async";

 

const EnrolledClass = () => {
        return (
                <div>
                <Helmet>
                        <title> Sports camp | EnrollClass </title>
                </Helmet>
                        <h1>Enrolled Classes :</h1>
                        <table className="table ">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>name</th>
        <th>Class</th>
        <th>Instructor</th>
        <th>Position</th>
         
      </tr>
    </thead>
    </table>
                </div>
        );
};

export default EnrolledClass;