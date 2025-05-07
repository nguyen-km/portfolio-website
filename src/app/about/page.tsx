import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-8 space-y-8">
        <section>
            <h1 className="text-3xl font-bold mb-4 text-sky-200">Hi, I&apos;m Kevin</h1>
            <p className="text-lg">I&apos;m a data analyst at BBC Research & Consulting, where I develop Bayesian models and data infrastructure to support equity-focused public contracting. My work informs policy decisions and helps agencies design business inclusion programs that are both impactful and legally defensible.</p>
        </section>

        <section>
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Modeling & ML */}
            <div>
            <h3 className="text-xl font-bold">Modeling & ML</h3>
            <div className="flex flex-wrap gap-2">
                {['PyMC', 'scikit-learn', 'TensorFlow', 'Keras', 'NumPy', 'pandas'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-sky-700/30 text-sky-200 text-sm  rounded-full">{skill}</span>
                ))}
            </div>
            </div>

            {/* Visualization & Analytics */}
            <div>
            <h3 className="text-xl font-bold">Visualization & Analytics</h3>
            <div className="flex flex-wrap gap-2">
                {['Matplotlib', 'Seaborn', 'Tableau', 'ggplot2', 'Microsoft Excel', 'data visualization'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-sky-700/30 text-sky-200 text-sm rounded-full">{skill}</span>
                ))}
            </div>
            </div>

            {/* Programming & Tools */}
            <div>
            <h3 className="text-xl font-bold">Programming & Tools</h3>
            <div className="flex flex-wrap gap-2">
                {['Python', 'R', 'SQL', 'PostgreSQL', 'Docker', 'SQLAlchemy'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-sky-700/30 text-sky-200 text-sm rounded-full">{skill}</span>
                ))}
            </div>
            </div>

        </div>
        </section>



        <section>
            <h2 className="text-2xl font-semibold mb-2 ">Experience</h2>
            <div className="space-y-4">
            <div>
                <h3 className="text-xl font-bold text-sky-200">BBC Research & Consulting</h3>
                <p className="text-sky-100 text-base flex items-center gap-2">
                    Data Analyst
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full">
                        Current
                    </span>
                    </p>
                <p className="text-neutral-400 text-sm">Lead developer of a modular MCMC framework for availability modeling used in disparity studies at BBC. I build statistical infrastructure and modeling pipelines — using Python, R, PostgreSQL, and Docker — to support small and diverse business program development for public agencies nationwide. My work informs client-facing reports and helps ensure legal defensibility of equity programs through rigorous, data-driven analysis.</p>
            </div>
            <div>
                <h3 className="text-xl font-bold text-sky-200">Chipotle Mexican Grill, Inc.</h3>
                <p className="text-sky-100 text-base">Data Engineering Intern</p>
                <p className="text-neutral-400 text-sm">Worked on national-scale marketing analytics and ETL optimization. Streamlined data delivery for the "Buy the Dip" campaign, supported internal teams with Microsoft SQL Server and Snowflake, and refactored over 70 SSIS packages to improve pipeline reliability and performance.</p>
            </div>
            <div>
                <h3 className="text-xl font-bold text-sky-200">White House Council of Economic Advisers</h3>
                <p className="text-sky-100 text-base">Finance & Banking Intern</p>
                <p className="text-neutral-400 text-sm">Supported staff economists on research featured in the <strong>2019 Economic Report of the President</strong>. Conducted analysis in Stata and Excel, queried large federal datasets, and helped prepare visualizations and regression outputs used in White House reports on financial markets, labor, and international trade.</p>
            </div>
            </div>
        </section>
        <section>
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <div className="space-y-2">
            <div>
            <h3 className="text-lg font-bold text-sky-200">University of Colorado Boulder</h3>
            <p className="text-sky-100 text-base">M.S. in Applied Mathematics, Emphasis in Statistics and Data Science – 2023</p>
            <p className="text-sky-100 text-base">B.A. in Quantiative Economics and Political Science – 2020</p>
            </div>
        </div>
        </section>

        </main>
      <Footer />
    </>
  )
}